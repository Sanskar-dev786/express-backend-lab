// Import Mongoose.
// Create an asynchronous connectDB() function.
// Access the URI using process.env.MONGODB_URI.
// Establish the database connection.
// Print a success message.
// Export the connectDB function.

const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
async function connectDB() {
    try{
        await mongoose.connect(url);
        console.log("MongoDB connection sucessfull")
    }
    catch(error){
        console.log(error.message)
    }
    
}

// async function connectDB() {
   
//     console.log("MongoDB connect Successfully")
//     console.log(mongoose.connection.readyState);

//     await mongoose.disconnect();

//     console.log(mongoose.connection.readyState);
// }

// connectDB()
// connectDB()
module.exports = connectDB