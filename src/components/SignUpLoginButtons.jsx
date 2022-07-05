import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Button } from 'antd'

const SignUpLoginButtons = () => {
  const { isLoggedIn, removeToken } = useContext(AuthContext)
  console.log(isLoggedIn)

  return (
    <>
      {!isLoggedIn ? (
        <div>
          <Link className="signUpButton SignLogButtons" to="/signup">
            Sign Up
          </Link>
          <Link className="loginButton SignLogButtons" to="/login">
            Log In
          </Link>
        </div>
      ) : (
        <Button onClick={removeToken}>logout</Button>
      )}
    </>
  )
}

export default SignUpLoginButtons
