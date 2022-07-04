import { text } from "body-parser";
import Input from "rc-input";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const UpdateReservation = (props) => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const handleDate = (e) => setDate(e.target.value);
  const handleText = (e) => setText(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "api/reservation/:id",
      baseURL: API_URL,
      method: "patch",
      data: {
        date,
        text,
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
    <>
      <form onSubmit={handleSignupSubmit}>
        <div className="userMailPassDiv">
          <div>
            <label>Date:</label>
            <input
              className="logInput"
              type="number"
              placeholder="reservation date"
              name="date"
              value={date}
              onChange={handleDate}
            ></input>
          </div>
          <div>
            <label>text:</label>
            <input
              className="logInput"
              type="text"
              placeholder="Please enter you input"
              name="text"
              value={text}
              onChange={handleText}
            ></input>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default UpdateReservation;
