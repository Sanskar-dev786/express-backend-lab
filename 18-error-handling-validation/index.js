// Configure dotenv and import Express.
// Import connectDB and Product.
// Initialize Express and register express.json() middleware.
// Create a GET /health endpoint returning status 200 and { message: "Server is running" }.
// Create startApp() with database connection, app.listen() and error handling.

require('dotenv').config();
const express = require("express")
const connectDB = require("./db")
const Product = require("./models/product.model")
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose");
const validateProduct = require("./middleware/validate.middleware")
const errorHandler = require("./middleware/error.middleware");
app.use(express.json())
app.use(errorHandler)



app.get("/health", (req, res) =>{
    return res.status(200).json({
        message:"Server is running"
    })
})

app.get("/products/:id", async (req, res, next) => {
    try {
        // Extract ID
        const id = req.params.id;

        if(!mongoose.isObjectIdOrHexString(id)){
            return res.status(400).json({
                message:"Invalid id"
            })
        }
        const findID = await Product.findById(id);
        if (!findID ){
            return res.status(404).json({
                message: "Product not found"
            })
        }
        return res.status(200).json({
            product: findID
        })

        // Validate ID — 400

        // Query database

        // Product not found — 404

        // Return retrieved product — 200

    } catch (error) {
        next(error)
    }
})
app.post("/products", validateProduct, async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        return res.status(201).json({
            message:"Product created",
            product
        })

        // Return 201
    } catch (error) {
        next(error)
    }
});
app.use(errorHandler)

async function startApp() {
    try{
        await connectDB()
        console.log("Application working fine")
        app.listen(PORT, ()=>{
            console.log("Listning to the port 3000")
        })
    }
    catch(error){
        console.error(error);
        process.exit(1);	
    }
    
}
startApp()
