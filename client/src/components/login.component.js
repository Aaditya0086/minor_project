// import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
// import "../styles/login.css";

// export default function Login() {
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const login = async () => {
//       dispatch(loginStart());
//       try {
//         const data = await axios.post(
//           "http://localhost:5000/auth/login/loginStudent",
//           {
//             email: email,
//             password: password,
//           }
//         );
//         if (data.statusText === "OK") {
//           alert("login successful");
//           dispatch(loginSuccess(data.data));
//           window.localStorage.setItem("token", data.data.token);
//           window.localStorage.setItem("loggedIn", true);
//           window.location.href = "./dashboard";
//         }
//       } catch (err) {
//         dispatch(loginFailure(err.response.data));
//       }
//     };
//     login();
//   };

//   return (
//     <div>
//       <div className="app__login-image">
//         <img
//           src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png"
//           alt="backgroung_img"
//         />
//       </div>
//       <form className="app__login" onSubmit={handleSubmit}>
//         <h3>Sign In</h3>

//         <div className="mb-3 app__login-email">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-3 app__login-password">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="mb-3 app__login-rememberme">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <div className="d-grid app__login-btn">
//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={{
//               backgroundColor: "#ffc107",
//               borderColor: "#ffc107",
//               color: "black",
//             }}
//           >
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password">
//           Forgot <a href="/">password?</a>
//         </p>
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import "../styles/login.css";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("normal");
  const [loginType, setLoginType] = useState("normal");

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = async () => {
      dispatch(loginStart());
      try {
        let endpoint = userType === "normal" ? "loginStudent" : "teacher";
        const data = await axios.post(
          `http://localhost:5000/auth/login/${endpoint}`,
          {
            email: email,
            password: password,
          }
        );
        if (data.statusText === "OK") {
          alert("login successful");
          dispatch(loginSuccess(data.data));
          window.localStorage.setItem("token", data.data.token);
          window.localStorage.setItem("loggedIn", true);
          if (userType === "admin") {
            window.location.href = "./admin-home";
          } else {
            window.location.href = "./dashboard";
          }
        }
      } catch (err) {
        dispatch(loginFailure(err.response.data));
      }
    };
    login();
  };

  return (
    <div>
      <div className="app__login-image">
        <img
          src="https://mujslcm.jaipur.manipal.edu:122/keen/themes/keen/theme/demo1/dist/assets/media/misc/collage.png"
          alt="backgroung_img"
        />
      </div>
      <form className="app__login" onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3 app__login-email">
          <label>Email address</label>
          <input
            type="email"
            className="form-controol"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 app__login-password">
          <label>Password</label>
          <input
            type="password"
            className="form-controol"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3 app__login-type">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="userType"
              id="normalUser"
              value="normal"
              checked={userType === "normal"}
              onChange={(e) => setUserType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="normalUser">
              Student
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="userType"
              id="adminUser"
              value="admin"
              checked={userType === "admin"}
              onChange={(e) => setUserType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="adminUser">
              Teacher
            </label>
          </div>
        </div>

        {/* <div className="mb-3 app__login-type">
          <label>Login Type</label>
          <select className="form-control" onChange={(e) => setLoginType(e.target.value)}>
<option value="normal">Normal</option>
<option value="admin">Admin</option>
</select>
</div> */}

<div className="d-grid app__login-btn">
      <button
        type="submit"
        className="btn btn-primary"
        style={{
          backgroundColor: "#ffc107",
          borderColor: "#ffc107",
          color: "black",
        }}
      >
        Submit
      </button>
    </div>
    {/* <p className="forgot-password">
      Forgot <a href="/">password?</a>
    </p> */}
  </form>
</div>
  );
}
