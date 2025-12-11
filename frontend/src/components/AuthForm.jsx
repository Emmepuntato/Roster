import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext.jsx'
import Profile from './Profile.jsx'

function AuthForm() {
  const [nickname, setNickname] = useState('')
  const [passCode, setPassCode] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useAuth() || false
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log({ nickname, passCode })
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname, passCode }),
        //body: JSON.stringify({ nickname: 'user1', passCode: '1234' }),
      })
      //console.log(res)

      if (!res.ok) throw new Error('Credenziali errate')

      const data = await res.json()
      console.log(data)
      login(data.token)
      console.log('Login riuscito')
      //navigate('/profile') // reindirizza pagina protetta
      setIsAuth(true)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className='bg-blue-950 min-w-screen min-h-screen flex justify-center items-center'>
      <div className='bg-white/50 backdrop-blur-lg min-h-50 min-w-50 text-black -translate-y-20 p-5 rounded-xl'>
        {isAuth ? (
          <Profile />
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            Authentication
            <div>
              <label></label>
              <input
                className='border p-2 rounded'
                type='text'
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder='Nickname'
              />
            </div>
            <div>
              {' '}
              <label></label>
              <input
                className='border p-2 rounded'
                type='text'
                value={passCode}
                onChange={(e) => setPassCode(e.target.value)}
                placeholder='Passcode'
              />
            </div>
            <button className='border p-1 rounded bg-white/40' type='submit'>
              Invia
            </button>
          </form>
        )}
        <span className='bg-orange'>{error}</span>
      </div>
    </div>
  )
}

export default AuthForm
