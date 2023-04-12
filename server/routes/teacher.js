const router = require("express").Router();
const Teacher = require("../models/Teacher");
const { verifyToken } = require("../verifytoken");

//need to implement the preferences part.
router.post("/",async(req,res,next)=>{
    try {
        await Teacher.findOneAndUpdate({email:req.body.email},{
            $push:{projectRequests:{projectName:req.body.projectName,teamId:req.params.teamId}}
        });
    } catch (error) {
        next(error)
    }
    

})

module.exports = router;
