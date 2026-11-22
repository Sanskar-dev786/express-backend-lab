const { studentSchema } = require("../schemas/studentSchema")

const validateStudent = ((req, res, next) => {
    const result = studentSchema.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({
            result: result.error.issues
        })
        // Task 1: Return HTTP 400
        // Include result.error.issues
    }
    req.body = result.data;
    next();

    // Task 2: Assign result.data to req.body

    // Task 3: Call next()
    
})


module.exports = { validateStudent };