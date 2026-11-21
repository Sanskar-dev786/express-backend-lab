const express = require("express");

const router = express.Router();

const students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Aman", age: 21 },
    { id: 3, name: "Priya", age: 22 }
];

router.get("/", (req, res) => {
    return res.status(200).json(students);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id)
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        })
}
else{
    return res.status(200).json({
        student
    })
}
})
  

   

//     Requirements:
// 1. Read the student ID from req.params.
// 2. Convert it into a number.
// 3. Use .find() to search the students array.
// 4. Return the student with status 200 if found.
// 5. Return status 404 if no student matches.
// For example, GET http://localhost:3000/students/2 should return Aman's details.


module.exports = router;