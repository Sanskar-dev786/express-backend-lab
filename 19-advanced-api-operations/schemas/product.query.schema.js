const { z } = require("zod");

const productQuerySchema = z.object({
    category: z.string().trim().min(1).optional(),

    search: z.string().trim().min(1).max(100).optional(),

    sort: z.enum([
        "price_asc",
        "price_desc",
        "newest"
    ]).default("newest"),

    page: z.string()
        .regex(/^[1-9]\d*$/)
        .transform(Number)
        .pipe(z.number().int().min(1).max(100000))
        .default(1),

    limit: z.string()
        .regex(/^[1-9]\d*$/)
        .transform(Number)
        .pipe(z.number().int().min(1).max(100))
        .default(5)
});

module.exports = productQuerySchema;