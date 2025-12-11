import { useAuth } from '../utils/AuthContext'

export default function Profile() {
  const { logout } = useAuth()
  return (
    <div>
      <span>Profile Page - Protected</span>
      <button
        className='mt-4 p-2 bg-red-500 text-white rounded'
        onClick={() => {
          logout()
          //localStorage.removeItem('token')
          window.location.reload()
        }}
      >
        Logout
      </button>
    </div>
  )
}
