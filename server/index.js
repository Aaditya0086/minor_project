const cookieSession = require("cookie-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//import routes
const authRoute = require("./routes/auth");
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teacher");
const teamRoute = require("./routes/team");

const dotenv = require("dotenv");
const helmet = require("helmet");
dotenv.config();
const app = express();

mongoose.set("strictQuery", false);
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL) //set the mongoDB url here or in the .env file
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(helmet());

app.use("/auth", authRoute);
app.use("/student", studentRoute);
app.use("/teacher", teacherRoute);
app.use("/team", teamRoute);

//listen on port 5000 or 9000
app.listen(process.env.PORT || "5000", () => {
  console.log("Server is running!");
  connect();
});

//routes are
//for login student http://localhost:5000/auth/login/student
//for login teacher http://localhost:5000/auth/login/teacher
//for register student  http://localhost:5000/auth/register/student
//for register teacher  http://localhost:5000/auth/register/student
//for team creation http://localhost:5000/team
//for teacher  http://localhost:5000/teacher
//for (student get by reg no) http://localhost:5000/student/:id
