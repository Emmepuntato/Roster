import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('auth') || null)

  const login = (newToken) => {
    localStorage.setItem('auth', newToken)
    setToken(newToken)
  }

  const logout = () => {
    localStorage.removeItem('auth')
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
