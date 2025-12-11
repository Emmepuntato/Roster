import AuthForm from './components/AuthForm.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import Profile from './components/Profile.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  )
}
