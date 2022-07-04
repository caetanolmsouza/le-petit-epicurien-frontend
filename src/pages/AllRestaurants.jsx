import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AllRestaurants = () => {
  console.log(process.env.REACT_APP_API_URL)
  const [restaurants, setRestaurants] = useState([])

  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/restaurant/restaurants`)
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
        <RestaurantCard key={restaurant._id} {...restaurant} />
      ))}
    </div>
  )
}

export default AllRestaurants
