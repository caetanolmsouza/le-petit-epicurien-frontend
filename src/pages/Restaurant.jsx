import React, { useContext } from 'react'
import RestaurantDetails from '../components/RestaurantDetails'
import ReservationForm from '../components/ReservationForm'
import axios from 'axios'

import { API_URL } from '../constants'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const Restaurant = () => {
  const { id } = useParams()

  const { getToken, isLoggedIn } = useContext(AuthContext)

  const handleCreateReservation = (
    e,
    _reservationId,
    { text, date, numberOfGuests }
  ) => {
    e.preventDefault()

    axios({
      url: `/reservation/`,
      baseURL: API_URL,
      method: 'post',
      data: {
        date,
        text,
        numberOfGuests,
        restaurant: id,
      },
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then((response) => {
        alert('reservqtion creqted')
        console.log('good', response.data)
      })
      .catch((err) => {
        console.log('bad', err.response.data)
      })
  }

  return (
    <section>
      <RestaurantDetails />
      <div>
        {isLoggedIn ? (
          <ReservationForm handleSubmit={handleCreateReservation} />
        ) : (
          <p>You must log in to make a reservation.</p>
        )}
      </div>
    </section>
  )
}

export default Restaurant
