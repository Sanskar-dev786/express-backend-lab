const mongoose = require("mongoose")
require("dotenv").config();
const connectDB = require("./db")
const Product = require("./models/product.model")

// Configure dotenv.
// Import the connectDB function.
// Create an asynchronous startApp() function.
// Wait for the database connection.
// Handle connection failure using process.exit(1).
// Call startApp().

async function saveProduct() {
   const product = new Product ({
    name: 'Wireless',
    description: 'Bluetooth wireless ',
    price: 599,
    category: 'Electronics',
    stock: 20,
    isAvailable: true,
   })
    console.log(product.isNew)
    await product.save()
    console.log(product.isNew)
    console.log(product)
    // Save document
    // Print isNew
    // Print document
}
// Create an asynchronous function named readProducts() and perform these five exercises.
// Exercise	Requirement
// 1	Retrieve all products
// 2	Retrieve products with price equal to 599
// 3	Retrieve products with price greater than 600
// 4	Retrieve products belonging to Electronics
// 5	Retrieve products with price less than 100

async function readProducts() {
    const product = await Product.find();
    console.log(product)
    const prisee = await Product.find({price: 599})
    console.log(prisee)
    const greaterr = await Product.find({price:{$gt: 600}})
    console.log(greaterr)
    const blongTo = await Product.find({category:"Electronics"})
    console.log(blongTo)
    const lesser = await Product.find({price:{$lt: 100}})
    console.log(lesser)
    
}
// Practical exercises
// Create an asynchronous function named readSingleProduct().
// Exercise	Requirement	Method
// 1	Find one product from Electronics	findOne()
// 2	Find a product with price 699	findOne()
// 3	Find a product with price 100	findOne()
// 4	Find WirelessMouse using its ID	findById()
// 5	Search using a valid but nonexistent ID	findById()
async function readSingleProduct() {
    const blongTo = await Product.findOne({category:"Electronics"})
    console.log(blongTo)
    const prisee = await Product.findOne({price: 699})
    console.log(prisee)
    const psLess = await Product.findOne({price: 100})
    console.log(psLess)
    const findMouse = await Product.findById("6b07c79cb4016887a9069f18")
    console.log(findMouse)
    const searchNonEisit = await Product.findById("6b07c79cb4016887a9069f12")
    console.log(searchNonEisit)

    
}
async function deleteID() {
    const deletet = await Product.deleteOne({name:"WirelessMoue"})
    const deletByID = await Product.findByIdAndDelete("6b07d080a40f12b74db9af91");
    console.log(deletet)
    console.log(deletByID)
    
}
    



async function startApp() {
    try {
        await connectDB()
        console.log("Database connestion successfull")
        // await saveProduct()
        // await readProducts()
        // await readSingleProduct()
        // await updateeed()
        await deleteID()
        // Establish database connection
        // Print success message
        // Await saveProduct()
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

startApp();