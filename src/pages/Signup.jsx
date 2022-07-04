import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className="loginDiv">
      <h1>Le Petit Épicurien</h1>
      <SignupForm />
      <p>
        Already have an account? Go to <Link to="/login">Login</Link>.
      </p>
    </div>
  )
}

export default Signup
