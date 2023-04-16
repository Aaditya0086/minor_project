const mongoose = require("mongoose");

const loginTeacherSchema = mongoose.Schema(
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
    userType: { type: String, enum: ['admin'] },

    // section: {
    //   type: String,
    // },
    // sem: {
    //   type: String,
    // },
    // year: {
    //   type: String,
    // },
    
    // regNo: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
  },
//   { timestamps: true }
);

module.exports = mongoose.model("LoginTeacher", loginTeacherSchema);
