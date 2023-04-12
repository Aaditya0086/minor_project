import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import "../styles/login.css";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const login = async () => {
      dispatch(loginStart());
      try {
        const data = await axios.post(
          "http://localhost:5000/auth/login/student",
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
          window.location.href = "./dashboard";
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
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 app__login-password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3 app__login-rememberme">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

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
        <p className="forgot-password">
          Forgot <a href="/">password?</a>
        </p>
      </form>
    </div>
  );
}
