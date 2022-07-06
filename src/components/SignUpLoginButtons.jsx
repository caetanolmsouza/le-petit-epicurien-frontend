import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Button } from 'antd'

const SignUpLoginButtons = () => {
  const { isLoggedIn, removeToken } = useContext(AuthContext)
  console.log(isLoggedIn)
  const navigate = useNavigate()

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
        <Button
          className="logoutButton"
          onClick={() => {
            removeToken()
            navigate('/')
          }}
        >
          Logout
        </Button>
      )}
    </>
  )
}

export default SignUpLoginButtons
