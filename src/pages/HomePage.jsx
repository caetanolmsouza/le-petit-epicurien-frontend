import React from "react";
import Paris from "../assets/Paris.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import Signup from "../components/Signup";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import Login from "../components/Login";

const API_URL = "http://localhost:5005";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showForm, setShowForm] = useState(true);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    axios({
      url: "/api/auth/signup",
      baseURL: API_URL,
      method: "post",
      data: {
        email,
        password,
        username,
      },
    })
      .then((response) => {
        console.log("good", response.data);
      })
      .catch((err) => {
        console.log("bad", err.response.data);
      });
  };

  const CheckLogin = () => {
    setShowForm(false);
    console.log(showForm, "checking");
  };

  const CheckSignUp = () => {
    setShowForm(true);
    console.log(showForm, "checking");
  };

  return (
    <div>
      {showForm ? <Signup /> : <Login />}
      <Button onClick={CheckLogin}>sign in</Button>
      <Button onClick={CheckSignUp}>sign Up</Button>
    </div>
  );
};

export default Home;
