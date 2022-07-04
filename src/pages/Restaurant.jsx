import React from 'react'
import RestaurantDetails from '../components/RestaurantDetails'
import CreateNewReservationForm from '../components/CreateNewReservationForm'

const Restaurant = () => {
  return (
    <section>
      <h2>Restaurant</h2>
      <RestaurantDetails />
      <CreateNewReservationForm />
    </section>
  )
}

export default Restaurant
