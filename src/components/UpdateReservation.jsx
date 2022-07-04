import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:5005'

const UpdateReservation = (props) => {
  const [date, setDate] = useState(props.date)
  const [text, setText] = useState(props.text)
  const [numberOfGuests, setNumberOfGuests] = useState(props.numberOfGuests)
  const handleDate = (e) => setDate(new Date(e.target.value))
  const handleText = (e) => setText(e.target.value)
  const handleNumberOfGuests = (e) => setNumberOfGuests(e.target.value)

  let dateString =
    date.getFullYear().toString().padStart(4, '0') +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    date.getDate().toString().padStart(2, '0')
  return (
    <>
      <form
        onSubmit={(e) =>
          props.handleUpdateSubmit(e, props.id, { text, date, numberOfGuests })
        }
      >
        <div className="userMailPassDiv">
          <div>
            <label>Date:</label>
            <input
              className="logInput"
              type="date"
              placeholder="reservation date"
              name="date"
              value={dateString}
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
          <div>
            <label>numberOfGuests:</label>
            <input
              className="logInput"
              type="number"
              placeholder="Please enter number of guest"
              name="number"
              value={numberOfGuests}
              onChange={handleNumberOfGuests}
            ></input>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default UpdateReservation
