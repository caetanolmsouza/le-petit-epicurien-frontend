import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { AuthContext } from '../context/auth.context'
import ReservationForm from '../components/ReservationForm'

import { API_URL, formatAsWeekdayDateMonth } from '../constants'
import '../App.css'

const AllReservations = () => {
  const [reservations, setReservations] = useState([])
  const context = useContext(AuthContext)

  const getAllReservations = () => {
    axios
      .get(`${API_URL}/reservation/`, {
        headers: { Authorization: `Bearer ${context.getToken()}` },
      })
      .then((response) => {
        const reservationsWithShowForm = response.data.map((reservation) => {
          reservation.showForm = false
          reservation.date = new Date(reservation.date)
          return reservation
        })
        setReservations(reservationsWithShowForm)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAllReservations()
  }, [])

  const handleUpdateSubmit = (e, id, { text, date, time, numberOfGuests }) => {
    e.preventDefault()
    axios({
      url: `/reservation/${id}`,
      baseURL: API_URL,
      method: 'patch',
      data: {
        date,
        time,
        text,
        numberOfGuests,
      },
    })
      .then((response) => {
        const reservationsArrayWithOneUpdate = reservations.map(
          (reservation) => {
            if (id === reservation._id) {
              reservation = { ...reservation, text, date, numberOfGuests }
              reservation.showForm = !reservation.showForm
            }
            return reservation
          }
        )
        setReservations(reservationsArrayWithOneUpdate)
        console.log('good', response.data)
      })
      .catch((err) => {
        console.log('bad', err.response.data)
      })
  }

  const deleteReservation = async (id) => {
    await axios.delete(`${API_URL}/reservation/${id}`)
    getAllReservations()

    // axios.delete
    // call the function getAllReservations
    // dont need the following
    // const reservationToKeep = reservations.filter(
    // (reservation) => reservation._id !== id
    //);
    //setReservations(reservationToKeep);
  }

  const editReservation = (id) => {
    const updatedReservations = reservations.map((reservation) => {
      if (id === reservation._id) {
        reservation.showForm = !reservation.showForm
      }
      return reservation
    })

    setReservations(updatedReservations)
    console.log(' ', id)
  }
  if (!reservations.length) return <p>No reservations yet</p>
  return (
    <div className="myReservDiv">
      <h1 className="h1MyReserv"> My Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li className="myReservTexts" key={reservation._id}>
            <b>Restaurant:</b>{' '}
            <b className="restName">{reservation.restaurant.name}</b>booked for{' '}
            {reservation.numberOfGuests} people{' '}
            {formatAsWeekdayDateMonth(reservation.date)}
            <button
              className="delButton"
              onClick={() => deleteReservation(reservation._id)}
            >
              Delete Reservation
            </button>
            <button
              className="myReservButtons updateButton"
              onClick={() => editReservation(reservation._id)}
            >
              Update Reservation
            </button>
            {reservation.showForm && (
              <ReservationForm
                date={reservation.date}
                text={reservation.text}
                numberOfGuests={reservation.numberOfGuests}
                id={reservation._id}
                handleSubmit={handleUpdateSubmit}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllReservations
