const express = require("express")
const router = express.Router();

// Implement two routes:
// Method	Endpoint	Expected behavior
// GET	/products	Return all products
// GET	/products/:id	Return one product or 404

// Remember to create the router using express.Router(), export it with module.exports, and mount it in index.js.

// Your task: Write productRoutes.js and the line needed in index.js to connect it. Share your code, and I'll review it without giving away the solution first.
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 }
];

router.get("/", (req, res) => {
    return res.status(200).json(products)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const product = products.find((p) => p.id === id)

    if(!product){
        return res.status(404).json({
            message: "product not found"
        })
    }
    return res.status(200).json({product})
})

module.exports = router;