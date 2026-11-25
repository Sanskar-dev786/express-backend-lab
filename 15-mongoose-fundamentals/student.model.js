const mongoose = require("mongoose");
const { required } = require("zod/mini");


// name	Required, minimum 3 characters, trim whitespace
// age	Required, minimum 18, maximum 60
// email	Required
// course	Default value "BTech"
// isActive	Default value true
// admissionDate	Default value Date.now
const studentSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
    minLength: 3,
    trim: true
},
    age: {
        type: Number,
        required: true,
        min:18,
        max: 60
    },
    email:{
        type: String,
        required: true
    },
    course: {
        type:String,
        default: "B.Tech"
    },
    isActive:{
        type: Boolean,
        default: true
    }
        ,
    skills: {
        type:[String]
    },
    admissionDate: {
        type:Date,
        default:Date.now
    },
    marks:{
        type: [Number]
    },
    address:{
        City: String,
        State: String,
        Pincode: Number,

        
    }
},{timestamps:true})
// console.log(studentSchema.obj);

const Student = mongoose.model("Student", studentSchema);
console.log(Student.modelName)
console.log(Student.collection.name);
console.log(studentSchema.options.timestamps);
module.exports = Student ;