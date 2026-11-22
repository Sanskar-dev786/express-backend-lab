const { studentSchema } = require("../schemas/studentSchema");


const createStudent = ((req, res)=> {
    const result = studentSchema.safeParse(req.body);
    if(!result.success) {
        return res.status(400).json({
            result: result.error.issues
        })
    
    }
    return res.status(201).json({
        message : "Student validated succefully",
        student : result.data

})
    // Task 1: Check if result.success is false
    // Task 2: Return status 400 with validation errors
    // Task 3: If valid, return status 201 with result.data
})

module.exports = {createStudent};
