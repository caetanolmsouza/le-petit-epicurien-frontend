import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import { Col, Row } from 'antd'

const AllRestaurants = () => {
  console.log(process.env.REACT_APP_API_URL)
  const [restaurants, setRestaurants] = useState([])
  const [search, setSearch] = useState('')

  const restaurantToDisplay = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(search.toLowerCase())
  })

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
      <Search search={search} setSearch={setSearch} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {restaurants.map((restaurant) => (
          <Col key={restaurant._id}>
            <RestaurantCard {...restaurant} />
          </Col>
        ))}
      </Row>
      {/* test */}
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {restaurantToDisplay.length > 0 ? (
          restaurantToDisplay.map((restaurant) => {
            // console.log(food);
            return <RestaurantCard key={restaurant.image} {...restaurant} />
          })
        ) : (
          <p>No food :/</p>
        )}
      </Row>
      {/* teste */}
    </div>
  )
}

export default AllRestaurants
