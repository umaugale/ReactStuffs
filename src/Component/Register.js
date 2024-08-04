import React, { useState } from "react";
import Login from "./Login";
import "./loginPage.css";
import axios from "axios";

const Register = () => {
  const [showLogin, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = (event) => {
    event.preventDefault();
    setLogin(true);
  };

  if (showLogin) {
    return <Login />;
  }

  async function register(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/student/register", {
        studentName: name,
        email: email,
        password: password,
      });
      alert("Registration Successfully");
      setLogin(true); // Redirect to login page after successful registration
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
          <button type="submit" className="btn" onClick={register}>
            Sign Up
          </button>
        </form>
        <div className="switch-auth">
          <p>
            Already have an account?{" "}
            <a href="#register" onClick={handleRegisterClick}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
