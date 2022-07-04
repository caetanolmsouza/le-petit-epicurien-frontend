import axios from 'axios'
import { createContext, useCallback, useEffect, useState } from 'react'

// make a new React context
const AuthContext = createContext()

const AuthContextWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  const storeToken = (token) => {
    localStorage.setItem(process.env.TOKEN_STORAGE_KEY, token)
    authenticateUser()
  }

  const removeToken = () => {
    localStorage.removeItem(process.env.TOKEN_STORAGE_KEY)
    authenticateUser()
  }

  const getToken = useCallback(() => {
    return localStorage.getItem(process.env.TOKEN_STORAGE_KEY)
  }, [])

  const authenticateUser = useCallback(() => {
    const token = getToken()

    if (!token) {
      setIsLoading(false)
      setUser(null)
      setIsLoggedIn(false)
      return
    }

    setIsLoading(true)
    console.log(process.env.API_URL)
    axios({
      method: 'get',
      baseURL: process.env.API_URL || 'http://localhost:5005/',
      url: '/auth/verify',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setUser(response.data)
        setIsLoggedIn(true)
        setIsLoading(false)
      })
      .catch(() => {
        setUser(null)
        setIsLoggedIn(false)
        setIsLoading(false)
      })
  }, [getToken])

  useEffect(authenticateUser, [authenticateUser])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        removeToken,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextWrapper }
