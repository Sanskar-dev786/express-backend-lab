const express = require("express")

const router = express.Router();

const {createStudent} = require("../controllers/studentController.js");
const {validateStudent} = require("../middleware/validateStudent.js")

router.post("/",validateStudent, createStudent);



module.exports = router;