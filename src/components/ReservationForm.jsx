import React from 'react'
import { useState } from 'react'
import { formatAsInputDate } from '../constants'

const ReservationForm = (props) => {
  const [date, setDate] = useState(props.date)
  const [text, setText] = useState(props.text)
  const [time, setTime] = useState(props.time)
  const [numberOfGuests, setNumberOfGuests] = useState(props.numberOfGuests)
  const handleDate = (e) => setDate(new Date(e.target.value))
  const handleTime = (e) => setTime(new Date(e.target.value))

  const handleText = (e) => setText(e.target.value)
  const handleNumberOfGuests = (e) => setNumberOfGuests(e.target.value)

  return (
    <div className="reservationFormDiv">
      <form
        onSubmit={(e) =>
          props.handleSubmit(e, props.id, { text, date, time, numberOfGuests })
        }
      >
        <div className="userMailPassDiv reservDiv">
          <div>
            <label className="myReservLabels">Date:</label>
            <input
              className="logInput"
              type="date"
              placeholder="reservation date"
              name="date"
              value={formatAsInputDate(date)}
              onChange={handleDate}
            ></input>
          </div>
          <div>
            <label className="myReservLabels">Time:</label>
            <input
              className="logInput"
              type="time"
              placeholder="reservation date"
              name="time"
              value={time}
              onChange={handleTime}
            ></input>
          </div>
          <div>
            <label className="myReservLabels">Special Request</label>

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
            <label className="myReservLabels">Number Of Guests:</label>
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

        <button className="myReservSaveButton" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default ReservationForm
