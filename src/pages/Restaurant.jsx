import React from 'react'
import RestaurantDetails from '../components/RestaurantDetails'
import CreateNewReservationForm from '../components/CreateNewReservationForm'

const Restaurant = () => {
  return (
    <section>
      <div>
        <h2>Restaurant</h2>
        <RestaurantDetails />
      </div>
      <div>
        <CreateNewReservationForm />
      </div>
    </section>
  )
}

export default Restaurant
