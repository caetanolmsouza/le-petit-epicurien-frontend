import React from 'react'
import './HomePage.css'
import img from '../assets/homeImage2.jpeg'

const Home = () => {
  return (
    <div className="homepage">
      <img src={img} alt="food" />
      <h1>Le Petit Épicurien</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        consequatur earum, distinctio ullam molestias quaerat ad, laudantium
        officiis quisquam, nemo cupiditate eos esse officia numquam laborum
        possimus magni perferendis alias?
      </p>
    </div>
  )
}

export default Home
