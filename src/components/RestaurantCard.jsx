import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

function RestaurantCard({ name, mainImage, cuisine, _id }) {
  return (
    <Card title={name} style={{ width: 300, height: 350, margin: 10 }}>
      <img src={mainImage} height={200} alt="food" />
      <p>cuisine: {cuisine}</p>
      <Link to={`/restaurants/${_id}`}>details</Link>
    </Card>
  )
}

export default RestaurantCard
