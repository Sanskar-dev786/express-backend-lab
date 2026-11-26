// This is a revision exercise from Lesson 15. Try writing the complete schema without referring to your previous Student or Book models.
// Schema requirements
// Field	Data type	Required	Constraints / Default
// name	String	Yes	trim, minLength: 3
// description	String	No	trim
// price	Number	Yes	min: 0
// category	String	No	Default: "General"
// stock	Number	No	min: 0, default: 0
// isAvailable	Boolean	No	Default: true

// Additional requirements:
// - Enable timestamps.
// - Name the schema productSchema.
// - Create a model named Product.
// - Export the model.
// - Import the model into index.js.

const mongoose = require("mongoose")
const { minLength } = require("zod")
const { required } = require("zod/mini")
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minLength:3,
        trim: true
    },
    description:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        required: true,
        min:0
    },
    category:{
        type:String,
        default:"General",
        trim: true
    },
    stock:{
        type:Number,
        min:0,
        default:0
    },
    isAvailable: {
    type: Boolean,
    default: true
}

},{timestamps:true})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;