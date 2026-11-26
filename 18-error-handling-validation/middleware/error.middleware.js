const { response } = require("express");

function errorHandler(error, req, res, next) {
    if (error.name === "ValidationError") {
        return res.status(400).json({
            message:"Validation Error"
        })
    }
    else if (error.name == "CastError") {
        return res.status(400).json({
            message:"CastError"

        })
    }
    console.log(error.message)

    return res.status(500).json({
        message:"Internal server Error"
        
    })
    

    // Handle CastError

    // Log unexpected error

    // Return 500
}

module.exports = errorHandler;