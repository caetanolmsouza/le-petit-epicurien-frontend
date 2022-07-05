import React from 'react'
import './HomePage.css'
import img from '../assets/homeImage2.jpeg'

const Home = () => {
  return (
    <div className="homepage">
      <h1 className="h1Home">Le Petit Épicurien</h1>
      <p className="paris">Paris</p>
      <img className="homePic" src={img} alt="food" />
      <p className="homeText">
        Le Petit Épicurien is a place were you can search for some restaurants
        in Paris and make a reservation for a table.
      </p>
    </div>
  )
}

export default Home
