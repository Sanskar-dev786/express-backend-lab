const express = require("express")
const app = express();

const studentRoutes = require("./routes/studentRoutes")

app.use(express.json())

app.use("/students", studentRoutes)

app.listen(3000, ()=> {
    console.log("Listning to the port 3000")
})
