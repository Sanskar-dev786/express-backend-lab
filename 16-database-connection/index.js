require("dotenv").config();
const connectDB = require("./db")

async function startApp() {
    try{
    await connectDB();
    console.log("Application started successfully");
    }
    catch(error){
        process.exit(1);
    }

}
startApp();

