import React, { useState } from "react";
import Register from "./Register";
import Dashboard from "./Dashboard";
import axios from "axios";
import "./loginPage.css";
import "./Home.css";
import {  useNavigate } from "react-router";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [userType, setUserType] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();


  const handleRegisterClick = (event) => {
    event.preventDefault();
    setShowRegister(true);
  };

  if (showRegister) {
    return <Register />;
  }

  async function login(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/student/login", {
        email: email,
        password: password,
      });

      if (response.data.message === "Email not exists") {
        alert("Email not exists");
      } else if (response.data.message === "Login Success") {
        setIsLoggedIn(true)
        history("/dashboard", { state: { userType } });
      } else {
        alert("Incorrect Email and Password do not match");
      }
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div className="auth-container container">
      <div className="auth-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>User Type:</label>
            <select className="selection" 
              value={userType} 
              onChange={(event) => setUserType(event.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn" onClick={login}>Login</button>
        </form>

        <div className="switch-auth">
          <p>
            Don't have an account?{" "}
            <a href="#register" onClick={handleRegisterClick}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
