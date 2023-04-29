const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
    },
    mobNo: {
      type: String,
    },
    id: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      //if only teacher is logging in then use the password
      type: String,
    },
    //mobNo, ID
    projectRequests:[{}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
