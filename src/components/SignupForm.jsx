import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../constants'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleUsername = (e) => setUsername(e.target.value)

  const handleSignupSubmit = (e) => {
    e.preventDefault()

    axios({
      url: '/auth/signup',
      baseURL: API_URL,
      method: 'post',
      data: {
        email,
        password,
        username,
      },
    })
      .then((response) => {
        console.log('good', response.data)
      })
      .catch((err) => {
        console.log('bad', err.response.data)
      })
  }
  return (
    <form onSubmit={handleSignupSubmit}>
      <div className="userMailPassDiv">
        <div>
          <label>Username:</label>
          <input
            className="logInput"
            type="text"
            placeholder="Your username"
            name="username"
            value={username}
            onChange={handleUsername}
          ></input>
        </div>
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
        <input type="submit" value="Sign Up" />
      </div>
    </form>
  )
}

export default SignupForm
