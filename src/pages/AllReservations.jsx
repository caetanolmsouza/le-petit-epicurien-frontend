import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import UpdateReservation from '../components/UpdateReservation'
import { AuthContext } from '../context/auth.context'

const API_URL = 'http://localhost:5005'

const AllReservations = () => {
  const [reservations, setReservations] = useState([])
  const context = useContext(AuthContext)

  const getAllReservations = () => {
    axios
      .get(`${API_URL}/api/reservation/`, {
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

  const handleUpdateSubmit = (e, id, { text, date, numberOfGuests }) => {
    e.preventDefault()
    axios({
      url: `api/reservation/${id}`,
      baseURL: API_URL,
      method: 'patch',
      data: {
        date,
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
    await axios.delete(`${API_URL}/api/reservation/${id}`)
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

  return (
    <>
      <h1> My Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>
            Restaurant-
            {reservation.restaurant.name} booked for -
            {reservation.numberOfGuests} people
            <button onClick={() => deleteReservation(reservation._id)}>
              Delete Reservation
            </button>
            <button onClick={() => editReservation(reservation._id)}>
              Update Reservation
            </button>
            {reservation.showForm && (
              <UpdateReservation
                date={reservation.date}
                text={reservation.text}
                numberOfGuests={reservation.numberOfGuests}
                id={reservation._id}
                handleUpdateSubmit={handleUpdateSubmit}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllReservations
