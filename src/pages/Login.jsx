import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    axios({
      url: "/api/auth/login",
      baseURL: API_URL,
      method: "post",
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        console.log("good", response.data);
      })
      .catch((err) => {
        console.log("bad", err.response.data);
      });
  };
  return (
    <div>
      <div className="loginDiv">
        <h1>Le Petit Épicurien</h1>
        <form onSubmit={handleSignupSubmit}>
          <div className="userMailPassDiv">
            <div>
              <label>Email:</label>
              <input
                className="logInput"
                placeholder="Your email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              ></input>
            </div>
            <div>
              <label>Password:</label>
              <input
                className="logInput"
                type="password"
                placeholder="*******"
                name="password"
                value={password}
                onChange={handlePassword}
              ></input>
            </div>
          </div>
          <div>
            <button type="submit">LogIn</button>
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;