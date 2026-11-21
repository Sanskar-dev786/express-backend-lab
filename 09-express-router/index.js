const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");
const productRoutes = require("./routes/productRoutes");


app.use(express.json());
app.use("/students", studentRoutes);
app.use("/products", productRoutes)




app.listen(3000, ()=>{
    console.log("listening to the port 3000")
})