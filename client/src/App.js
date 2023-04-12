import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useSelector } from "react-redux";
import Login from "./components/login.component";
import UserDetails from "./components/userDetails";
import Navbar from "./pages/navbar/navbar";
import StudentForm from "./pages/studentForm/studentForm";
// import SignUp from './components/signup.component'

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const { userData } = useSelector((state) => state.user);

  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              MUJ
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <Navbar />

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                exact
                path="/"
                element={userData ? <UserDetails /> : <Login />}
              />
              <Route path="/sign-in" element={<Login />} />
              <Route
                path="/dashboard"
                element={!userData ? <Login /> : <UserDetails />}
              />
              <Route
                path="/student-form"
                element={userData ? <StudentForm /> : <Login />}
              />
              {/* <Route path="/sign-up" element={<SignUp />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
