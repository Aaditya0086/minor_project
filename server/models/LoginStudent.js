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
    userType: { type: String, enum: ['user'] },

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

module.exports = mongoose.model("LoginStudent", loginStudentSchema);
