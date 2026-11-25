const { default: mongoose } = require("mongoose");
const { minLength, trim } = require("zod");
const { required } = require("zod/mini");

// Create a schema named bookSchema with the following fields:
// Field	Data type	Requirements
// title	String	Required, minimum 3 characters, trim
// author	String	Required, trim
// price	Number	Required, minimum 0
// category	String	Default "General"
// inStock	Boolean	Default true
// tags	Array of strings	Optional
// publishedDate	Date	Optional
// rating	Number	Minimum 0, maximum 5, default 0

// Additional requirements:
// - Enable timestamps.
// - Create a model named Book.
// - Export the model.

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minLength:3,
        trim: true
    },
    author:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        default:"General"
    },
    inStock:{
        type:Boolean,
        default:true
    },
    tags:{
        type:[String]
    },
    publishedDate:{
        type:Date,

    },
    rating:{
        type: Number,
        min:0,
        max:5,
        default:0
    }
},{timestamps:true})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;