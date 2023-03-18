const express = require("express");
const Student = require("../model/student");

const router = express.Router();

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// Adding a student to the list
router.post("/", async (req, res) => {
  try {
    const newStudent = new Student({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      study: req.body.study,
    });
    await newStudent.save();
    res.json({ message: "Student added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;