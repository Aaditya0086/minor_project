const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    students: [],
    project: {
      type: String,
      required: true,
    },
    teachers: [],
    teacher_Name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
