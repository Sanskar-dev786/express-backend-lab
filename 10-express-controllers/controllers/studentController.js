const express = require("express");
const getAllStudents = ((req, res) => {
    return res.status(200).json({
        messager: "All student fatched succefully"
    });
})

const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Priya" }
];



// Your task is to create a function called getStudentById that:
// 1. Reads the ID using req.params.id.
// 2. Finds the matching student using .find().
// 3. Returns HTTP 404 if no student exists.
// 4. Returns HTTP 200 with the student if found.
// 5. Exports the function so the router can use it.
// Then connect it in studentRoutes.js using:

const getStudentById = ((req, res) => {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id)
    if(!student){
        return res.status(404).json({
            message: "No student found"
        })
    }
    return res.status(200).json({
        student
    })
})






module.exports = { getAllStudents , getStudentById};