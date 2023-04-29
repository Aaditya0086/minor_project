const router = require("express").Router();
const Student = require("../models/Student");
const Team = require("../models/Team");
const Teacher =require("../models/Teacher")
const { verifyToken } = require("../verifytoken");

router.post("/", async (req, res, next) => {
  //create new team
  try {
    const studentID = req.body.students; //students  must be an array of studentid's forming a team .Like [209301543,209305634,...etc]
    const teacher =await Teacher.findOne({email:req.body.teacherEmail})
    
     if(!teacher){
      res.status(404).json("Teacher does not exist!");
    }
    else{

     /*  for(let i=0;i<studentsEmails.length();i++){
        let exist = await Student.findOne({email:studentsEmails[i]})
        if(!exist){res.status(404).json("Student does not exist!");
        return;
        }
      } */
    const newTeam = new Team({
      name: req.body.teamName,
      students: studentID,
      project: req.body.projectName,
    });
    console.log('newTeam', newTeam);

    await newTeam.save();
    await Team.findByIdAndUpdate(newTeam._id,{
      $push:{
        teachers:teacher
      }
    })

    const n=await Team.findById(newTeam._id)
    res.status(200).json(n);
  } 
  } catch (error) {
    next(error);
  }
});

module.exports = router;
