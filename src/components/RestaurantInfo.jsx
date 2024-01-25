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


      <p>{restaurant.marketingOffer?.title}</p>
    </div>
  )
}

export default RestaurantInfo
