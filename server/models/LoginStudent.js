const mongoose = require("mongoose");

const loginStudentSchema = mongoose.Schema(
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
      required: true,
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
    mobNo: {
      type: String,
    },
    course: {
      type: String,
    },
    regNo: {
      type: String,
      required: true,
      unique: true,
    },
    userType: { type: String, enum: ['user'] },
  },
//   { timestamps: true }
);

module.exports = mongoose.model("LoginStudent", loginStudentSchema);
