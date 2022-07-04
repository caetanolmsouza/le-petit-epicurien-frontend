import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:5005'

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  const getAllProjects = () => {
    axios
      .get(`${API_URL}/api/restaurant/restaurants`)
      .then((response) => {
        console.log(response.data)
        setRestaurants(response.data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAllProjects()
  }, [])
  // console.log(getAllProjects)
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={'picture'} {...restaurant} />
      ))}
    </div>
  )
}

export default AllRestaurants
