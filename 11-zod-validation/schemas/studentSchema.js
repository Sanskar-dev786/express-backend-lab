const z = require("zod");

const studentSchema = z.object({
    name: z.string().min(1),
    age: z.int().min(1).max(120),
    email: z.email()
});

module.exports = {studentSchema};