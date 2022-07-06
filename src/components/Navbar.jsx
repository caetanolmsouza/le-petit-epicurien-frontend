import React from 'react'
import { Link } from 'react-router-dom'
import SignUpLoginButtons from './SignUpLoginButtons'
import { AuthContext } from '../context/auth.context'
import { useContext } from 'react'

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)
  return (
    <div className="navbar">
      <div className="navbarUpButtons">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        {isLoggedIn && <Link to="/reservation">My Reservations</Link>}
        <div>
          <SignUpLoginButtons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
