require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const connectDB = require("./db");
const Product = require("./models/product.model");
const validateProduct = require("./middleware/validate.middleware");
const errorHandler = require("./middleware/error.middleware");
const productQuerySchema = require("./schemas/product.query.schema");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 1. Health check
app.get("/health", (req, res) => {
    return res.status(200).json({
        message: "Server is running"
    });
});

// 2. Retrieve products
// Filtering, searching, sorting and pagination

app.get("/products", async (req, res, next) => {
    try {
        // Validate query parameters
        const result = productQuerySchema.safeParse(req.query);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid query parameters",
                errors: result.error.issues
            });
        }

        // Extract validated parameters
        const {
            category,
            search,
            sort,
            page,
            limit
        } = result.data;

        // Filtering
        const filter = {};

        if (category) {
            filter.category = category;
        }

        // Searching
        if (search) {
            const escapedSearch = search.replace(
                /[.*+?^${}()|[\]\\]/g, "\\$&"
            );

            filter.name = {
                $regex: escapedSearch,
                $options: "i"
            };
        }

        // Sorting
        const sortOption = {};

        if (sort === "price_asc") {
            sortOption.price = 1;
        } else if (sort === "price_desc") {
            sortOption.price = -1;
        } else if (sort === "newest") {
            sortOption.createdAt = -1;
        }

        // Consistent ordering
        sortOption._id = 1;

        // Pagination
        const skip = (page - 1) * limit;

        // Retrieve products
        const products = await Product.find(filter)
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        // Count matching documents
        const totalProducts = await Product.countDocuments(filter);

        // Return response
        return res.status(200).json({
            page: page,
            limit: limit,
            totalProducts: totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            products: products
        });

    } catch (error) {
        next(error);
    }
});

// 3. Retrieve a single product by ID
app.get("/products/:id", async (req, res, next) => {
    try {
        const id = req.params.id;

        if (!mongoose.isObjectIdOrHexString(id)) {
            return res.status(400).json({
                message: "Invalid id"
            });
        }

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            product: product
        });

    } catch (error) {
        next(error);
    }
});

// 4. Create a product
app.post("/products", validateProduct, async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        return res.status(201).json({
            message: "Product created",
            product: product
        });

    } catch (error) {
        next(error);
    }
});

// 5. Centralized error handling
app.use(errorHandler);

// 6. Start application
async function startApp() {
    try {
        await connectDB();

        console.log("Application working fine");

        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

startApp();