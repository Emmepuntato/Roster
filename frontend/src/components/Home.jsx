import { Form } from 'react-router-dom'
import AuthForm from './AuthForm'
import Formation from './Formation'

export default function Home() {
  return (
    <div className='bg-blue-950 min-w-screen min-h-screen grid grid-rows-[1fr_2fr] place-items-center'>
      <AuthForm />
      <Formation />
    </div>
  )
}
