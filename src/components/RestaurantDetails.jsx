import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const RestaurantDetails = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:5005/api/restaurant/${id}`).then((response) => {
      console.log('reponseData', response.data)
      setRestaurant(response.data)
    })
  }, [])

  if (!restaurant) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  console.log('galleryPictures', restaurant.galleryPictures)

  return (
    <div>
      <div className="restaurantContainer">
        <img
          className="singleRestaurantImage"
          alt=""
          src={restaurant.mainImage}
        />
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
          <p>{restaurant.marketingOffer}</p>
          <p>galleryPictures</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails
