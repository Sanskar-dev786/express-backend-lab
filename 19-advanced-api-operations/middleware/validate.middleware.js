const productSchema = require("../schemas/product.schema")

function validateProduct(req, res, next){
    const result = productSchema.safeParse(req.body);
    if(!result.success) {
        return res.status(400).json({
            message: "Validation error",
            result: result.error.issues
        
        })    
    }
    req.body = result.data
    next()
}
module.exports =validateProduct;