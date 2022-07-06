import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="singleInfoRestaurant">
      <h2>
        <Link to={`/restaurantDetails/${restaurant._id}`}>
          {restaurant.name}
        </Link>
      </h2>
      <h3>{restaurant.cuisine}</h3>
      <p>{restaurant.localisation?.address?.street_name}</p>
      <p>{restaurant.localisation?.address?.city}</p>
      <p>{restaurant.priceRange}</p>
      <p>{`Loyalty program : ${restaurant.loyaltyProgram}`}</p>
      <p>{restaurant.marketingOffer?.title}</p>
    </div>
  )
}

export default RestaurantInfo
