const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    students: [],
    project: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
