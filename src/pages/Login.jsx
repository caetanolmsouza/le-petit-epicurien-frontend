import React from 'react'

import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className="loginDiv">
      <h1 className="h1LogDiv">Le Petit Épicurien</h1>
      <LoginForm />
      <p className="needAccount">
        Need an account? Go to{' '}
        <Link className="linksignLog" to="/signup">
          Signup
        </Link>
      </p>
    </div>
  )
}

export default Login
