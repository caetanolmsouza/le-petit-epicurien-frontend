import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Search from './Search'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarUpButtons">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/reservation">my Reservations</Link>
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
      <Search />
    </div>
  )
}

export default Navbar
