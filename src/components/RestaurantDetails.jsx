import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './RestaurantDetails.css'

import { API_URL } from '../constants'
import CarouselPicture from './CarouselPicture'
import RestaurantInfo from './RestaurantInfo'

const RestaurantDetails = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    axios({
      url: `/restaurant/${id}`,
      baseURL: API_URL,
      method: 'get',
    }).then((response) => {
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
    <>
      <h1>{restaurant.name}</h1>
      <div className="restaurant-container">
        <CarouselPicture galleryPictures={restaurant.galleryPictures} />
        <RestaurantInfo restaurant={restaurant} />
      </div>
    </>
  )
}

export default RestaurantDetails
