import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import { Col, Row } from 'antd'
import { API_URL } from '../constants'

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])

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
  // console.log(getAllProjects)
  return (
    <div>
      <Search />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {restaurants.map((restaurant) => (
          <Col key={restaurant._id}>
            <RestaurantCard {...restaurant} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default AllRestaurants
