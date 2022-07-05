import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

function RestaurantCard({
  name,
  mainImage,
  cuisine,
  localisation,
  priceRange,
  _id,
}) {
  return (
    <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
      <Link to={`/restaurants/${_id}`}>details</Link>
      <img src={mainImage} height={160} alt="" />
      <p>cuisine: {cuisine}</p>
      <p>address: {localisation?.address?.street_name} </p>
      <p>average price: {priceRange}</p>
    </Card>
  )
}

export default RestaurantCard
