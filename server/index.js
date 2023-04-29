// const cookieSession = require("cookie-session");
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const router = express.Router();

// //import routes
// const authRoute = require("./routes/auth");
// const studentRoute = require("./routes/student");
// const teacherRoute = require("./routes/teacher");
// const teamRoute = require("./routes/team");

// const dotenv = require("dotenv");
// const helmet = require("helmet");
// dotenv.config();
// const app = express();

// mongoose.set("strictQuery", false);
// const connect = () => {
//   mongoose
//     .connect(process.env.MONGO_URL) //set the mongoDB url here or in the .env file
//     .then(() => {
//       console.log("Connected to DB");
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

// //middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );
// app.use(helmet());

// app.use("/auth", authRoute);
// app.use("/student", studentRoute);
// app.use("/teacher", teacherRoute);
// app.use("/team", teamRoute);

// //listen on port 5000 or 9000
// app.listen(process.env.PORT || "5000", () => {
//   console.log("Server is running!");
//   connect();
// });

// router.get('/search', async (req, res) => {
//   try {
//     const searchQuery = req.query.query;
//     const students = await Student.find({
//       $or: [
//         { name: { $regex: searchQuery, $options: 'i' } },
//         { registrationNumber: { $regex: searchQuery, $options: 'i' } },
//       ],
//     });
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
//routes are
//for login student http://localhost:5000/auth/login/student
//for login teacher http://localhost:5000/auth/login/teacher
//for register student  http://localhost:5000/auth/register/student
//for register teacher  http://localhost:5000/auth/register/teacher
//for team creation http://localhost:5000/team
//for teacher  http://localhost:5000/teacher
//for (student get by reg no) http://localhost:5000/student/:id




const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();

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

// Define an array to store the request statuses
const requestStatuses = {};

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

// Define a GET route to check the status of a request
app.get('/api/request/status/:requestId', (req, res) => {
  const requestId = req.params.requestId;
  const status = requestStatuses[requestId];
  if (status) {
    res.json({ status });
  } else {
    res.status(404).json({ error: 'Request not found' });
  }
});

// Define a POST route to update the status of a request
app.post('/api/request/status/:requestId', (req, res) => {
  const requestId = req.params.requestId;
  const { status } = req.body;
  requestStatuses[requestId] = status;
  res.json({ success: true });
});

app.use("/auth", authRoute);
app.use("/student", studentRoute);
app.use("/teacher", teacherRoute);
app.use("/team", teamRoute);

//listen on port 5000 or 9000
app.listen(process.env.PORT || "5000", () => {
  console.log("Server is running!");
  connect();
});

router.get('/search', async (req, res) => {
  try {
    const searchQuery = req.query.query;
    const students = await Student.find({
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { registrationNumber: { $regex: searchQuery, $options: 'i' } },
      ],
    });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

