import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className="loginDiv">
      <h1 className="h1LogDiv">Le Petit Épicurien</h1>
      <SignupForm />
      <p className="needAccount">
        Already have an account? Go to{' '}
        <Link className="linksignLog" to="/login">
          Login
        </Link>
      </p>
    </div>
  )
}

export default Signup
