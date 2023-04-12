const router = require("express").Router();
const Student = require("../models/Student");
const { verifyToken } = require("../verifytoken");

/* router.post("/", async (req, res, next) => {
  //create a student
  try {
    const newStudent = new Student(req.body);

    await newStudent.save();
    res.status(200).json(newStudent._id); //after successfull student creation, this will return the id of the teammate or student created. Store those ids in the frontend and make call to create a new team using the studentID array
  } catch (error) {
    next(error);
  }
}); */

router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.find({ regNo: req.body.reg });

    const { password, ...others } = student._doc;
    res.status(200).json(others);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
