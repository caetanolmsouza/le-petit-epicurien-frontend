import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import { Col, Row } from 'antd'
import { API_URL } from '../constants'

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [search, setSearch] = useState('')

  const restaurantToDisplay = restaurants.filter((restaurant) => {
    if (restaurant.name) {
      return restaurant.name.toLowerCase().includes(search.toLowerCase())
    } else {
      return false
    }
  })

  const getAllProjects = () => {
    axios({
      method: 'get',
      url: '/restaurant/restaurants',
      baseURL: API_URL,
    })
      .then((response) => {
        console.log(response.data)
        setRestaurants(response.data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAllProjects()
  }, [])

  useEffect(() => {
    const result = restaurants.filter((restaurant) => {
      if (restaurant.name) {
        return restaurant.name.toLowerCase().includes(search.toLowerCase())
      } else {
        return false
      }
    })
    setFilteredRestaurants(result)
  }, [search, restaurants])

  // console.log(getAllProjects)
  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredRestaurants.map((restaurant) => (
          <Col key={restaurant._id}>
            <RestaurantCard {...restaurant} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default AllRestaurants
