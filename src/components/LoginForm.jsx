import React from 'react'

import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { API_URL } from '../constants'

const LoginForm = () => {
  console.log(process.env.API_URL)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { storeToken } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const handleSignupSubmit = (e) => {
    e.preventDefault()

    axios({
      url: '/auth/login',
      baseURL: API_URL,
      method: 'post',
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        const { authToken } = response.data
        // let the AuthContext have the authToken
        storeToken(authToken)
        // redirect home
        navigate('/')
        console.log('success', response.data)
      })
      .catch((err) => {
        console.log('failer', err.response.data)
      })
  }
  return (
    <form onSubmit={handleSignupSubmit}>
      <div className="userMailPassDiv">
        <div>
          <label>Email:</label>
          <input
            className="logInput"
            placeholder="Your email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            className="logInput"
            type="password"
            placeholder="*******"
            name="password"
            value={password}
            onChange={handlePassword}
          ></input>
        </div>
      </div>
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
  )
}

export default LoginForm
