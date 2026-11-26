// Your requirements:
// - Import Mongoose.
// - Create an asynchronous connectDB() function.
// - Access the URI from environment variables.
// - Establish the database connection.
// - Handle errors using try/catch and throw error.
// - Export the function without calling it.


const mongoose = require("mongoose")
const url = process.env.MONGODB_URI

async function connectDB() {
    try{
        await mongoose.connect(url)
        console.log("MongoDB connected successfully")
    }
    catch(error){
        throw error;
    }
    
}

module.exports = connectDB