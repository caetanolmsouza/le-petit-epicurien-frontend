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

      <h3>Cuisine: {restaurant.cuisine}</h3>
      <p>Address: {restaurant.localisation?.address?.street_name}</p>
      <p>City: {restaurant.localisation?.address?.city}</p>
      <p>Average Price: {restaurant.priceRange}</p>
      <p>{`Loyalty program : ${restaurant.loyaltyProgram ? 'yes' : 'no'}`}</p>

      <p>{restaurant.marketingOffer?.title}</p>
    </div>
  )
}

export default RestaurantInfo
