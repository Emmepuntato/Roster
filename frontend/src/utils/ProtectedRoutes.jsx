import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext.jsx'

export default function ProtectedRoutes({ children }) {
  console.log('ProtectedRoutes rendered')
  const { token } = useAuth()
  //console.log('token:', token)
  if (!token) return <Navigate to='/' />
  return children || <Outlet />
}
