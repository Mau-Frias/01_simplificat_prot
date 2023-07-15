import './navbar.css'
import React, { useState, useEffect, useRef } from 'react'

function Navbar() {
  const navbarRef = useRef()
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPos(position)
    if (scrollPos >= 500) {
      navbarRef.current.classList.add('navbar-unfixed')
    } else {
      navbarRef.current.classList.remove('navbar-unfixed')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPos])

  return (
    <div className='navbar' ref={navbarRef}>
      <div className='navbar-cont'>
        <a href='/' className='navbar-logo'>
          <h1>Simplifíca-T</h1>
        </a>
        <ul className='navbar-menu'>
          <li>
            <a href='/'>
              <i className='fa-solid fa-house fa-xs' /> Inico
            </a>
          </li>
          <li>
            <a href='/'>
              <i className='fa-solid fa-users fa-xs' /> Nosotros
            </a>
          </li>
          <li>
            <a href='/'>
              <i className='fa-solid fa-address-card fa-xs' /> Conocenos
            </a>
          </li>
          <li>
            <a href='/'>
              <i className='fa-solid fa-comments fa-xs' /> Contactos
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
