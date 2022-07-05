import React from 'react'
import Paris from '../assets/Paris.png'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AllRestaurants from '../pages/AllRestaurants'
import { API_URL } from '../constants'

const Login = () => {
  const [email, setEmail] = useState('g11@gmail.com')
  const [password, setPassword] = useState('Cae12345698hjg1')
  const [errorMessage, setErrorMessage] = useState(undefined)

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
        console.log('success', response.data)
      })
      .catch((err) => {
        console.log('failer', err.response.data)
      })
  }
  return (
    <div className="loginDiv">
      <h1>Le Petit Épicurien</h1>
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
          <button>LogIn</button>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default Login
