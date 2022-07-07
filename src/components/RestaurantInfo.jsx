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

      <h3>
        <b>Cuisine:</b> {restaurant.cuisine}
      </h3>
      <p>
        <b>Address:</b> {restaurant.localisation?.address?.street_name}
      </p>
      <p>
        <b>City:</b> {restaurant.localisation?.address?.city}
      </p>
      <p>
        <b>Average Price:</b> {restaurant.priceRange}
      </p>
      <p>
        <b>Loyalty program:</b> {`${restaurant.loyaltyProgram ? 'yes' : 'no'}`}
      </p>
      <p>{restaurant.marketingOffer?.title}</p>
    </div>
  )
}

export default RestaurantInfo
