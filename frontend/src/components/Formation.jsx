import { useState } from 'react'
import Team from './Team'
export default function Formation() {
  const [teams, setTeams] = useState(2)

  const cols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }

  return (
    <div className='bg-white/50 min-w-screen min-h-screen backdrop-blur-lg text-black rounded-xl grid grid-rows-[auto_1fr] '>
      <span className='m-5'>Formation Component</span>
      <div
        className={`min-w-10 min-h-10 bg-white/40 border rounded-lg grid ${cols[teams]} gap-4 p-5 m-5 place-items-center`}
      >
        <Team minPlayer={5} />
        <Team minPlayer={4} />
      </div>
    </div>
  )
}
