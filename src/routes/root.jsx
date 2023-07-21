import { useRef } from 'react'
import Navbar from '../components/navbar'

import { Outlet } from 'react-router-dom'

export default function Root() {
  const appRef = useRef()
  return (
    <div className="App" ref={appRef}>
      <Navbar scrollPos={''}/>
      <div className='content' id='content'>
        <Outlet />
      </div>
      <footer className='footer'>
        <p>© Simplifíca-T 2023</p>
      </footer>
    </div>

  )
}
