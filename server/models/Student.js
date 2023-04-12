const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    branch: {
      type: String,
    },
    section: {
      type: String,
    },
    sem: {
      type: String,
    },
    year: {
      type: String,
    },
    
    regNo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
