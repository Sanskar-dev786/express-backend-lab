const express = require("express")

const app = express();
const Student = require("./student.model")
const Book = require("./book.model")

app.use(express.json())


const book = new Book({
    title:"Herry Potter",
    author:"Sanskar",
    price: "499",

})
async function testValidate() {
   try{
    await book.validate()
    console.log("Validation Successfull")
   }
   catch(error){
    console.log(error.message)
   }
}
testValidate()

console.log(book)





