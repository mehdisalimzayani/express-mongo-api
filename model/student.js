const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  Study: String,
});

const Student = mongoose.model("Student", itemSchema);

module.exports = Student;
