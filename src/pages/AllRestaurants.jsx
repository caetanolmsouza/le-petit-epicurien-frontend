import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import { Col, Row } from 'antd'
import { API_URL } from '../constants'
import Footer from 'rc-table/lib/Footer'

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(100)

  useEffect(() => {
    const getAllProjects = () => {
      axios({
        method: 'get',
        url: '/restaurant/restaurants',
        baseURL: API_URL,
        params: { page },
      })
        .then((response) => {
          console.log(response.data)
          setRestaurants(response.data.results)
        })
        .catch((error) => console.log(error))
    }

    getAllProjects()
  }, [page])

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

  function previousPage() {
    setPage((p) => {
      if (p === 1) return p
      return p - 1
    })
  }

  function nextPage() {
    setPage((p) => {
      if (p === pageCount) return p
      return p + 1
    })
  }
  // console.log(getAllProjects)
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <button onClick={nextPage}>next page</button>
      <button onClick={previousPage}>prev page</button>

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
