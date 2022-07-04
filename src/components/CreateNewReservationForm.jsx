import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Calendar from "react-calendar"

const CreateNewReservationForm = () => {
  const [formData, setFormData] = useState({
    isGoing: true,
    numberOfGuests: 2,
  })

  function handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    setFormData({
      [name]: value,
    })
  }

  const [times, setTimes] = useState([
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ])
  const [reservationError, setReservationError] = useState(false)

  const getDate = (_) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
  }

  return (
    <form>
      <div>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={formData.isGoing}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={formData.numberOfGuests}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            name="bookingDate"
            type="number"
            value={formData.bookingDate}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </form>
  )
}

export default CreateNewReservationForm
