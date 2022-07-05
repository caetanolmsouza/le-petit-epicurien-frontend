import React from 'react'
import { Link } from 'react-router-dom'
import SignUpLoginButtons from './SignUpLoginButtons'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarUpButtons">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/reservation">my Reservations</Link>
        <div>
          {' '}
          <SignUpLoginButtons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
