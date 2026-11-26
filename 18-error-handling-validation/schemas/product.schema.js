const z = require("zod");

const productSchema = z.object({
    name: z.string().min(3).trim(),
    price: z.number().min(0),
    description: z.string().optional(),
    category:z.string().optional(),
    stock: z.number().int().min(0).optional(),
    isAvailable: z.boolean().optional()
})

module.exports = productSchema