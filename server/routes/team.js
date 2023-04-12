const router = require("express").Router();
const Student = require("../models/Student");
const Team = require("../models/Team");
const { verifyToken } = require("../verifytoken");

router.post("/", async (req, res, next) => {
  //create new team
  try {
    const studentID = req.body.students; //students  must be an array of studentid's forming a team .Like [209301543,209305634,...etc]
    const newTeam = new Team({
      name: req.body.teamName,
      students: studentID,
      project: req.body.projectName,
    });

    await newTeam.save();
    res.status(200).json(newTeam);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
