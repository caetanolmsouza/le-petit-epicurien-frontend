import React from 'react'
import { Link } from 'react-router-dom'

const SignUpLoginButtons = () => {
  return (
    <div>
      <Link className="signUpButton SignLogButtons" to="/signup">
        Sign Up
      </Link>
      <Link className="loginButton SignLogButtons" to="/login">
        Log In
      </Link>
    </div>
  )
}

export default SignUpLoginButtons
