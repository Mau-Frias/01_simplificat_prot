import './navbar.css'
import React, { useState, useEffect, useRef } from 'react'

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)
  const navbarRef = useRef()
  
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

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
    <nav className='navbar' ref={navbarRef}>
      <div className='navbar-cont'>
        <a href='/' className='navbar-logo'>
          <h1>Simplifíca-T</h1>
        </a>
        <button className='hamburger' onClick={handleClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='white'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <ul className={`navbar-menu ${isExpanded? 'expanded' : ''}`}>
          <li>
            <a href='/' className='link current'>
              <i className='fa-solid fa-house fa-xs' /> Inico
            </a>
          </li>
          <hr className='navbar-separator' />
          <li>
            <a href='' className='link'>
              <i className='fa-solid fa-users fa-xs' /> Nosotros
            </a>
          </li>
          <hr className='navbar-separator' />
          <li>
            <a href='/' className='link'>
              <i className='fa-solid fa-address-card fa-xs' /> Conocenos
            </a>
          </li>
          <hr className='navbar-separator' />
          <li>
            <a href='/' className='link'>
              <i className='fa-solid fa-comments fa-xs' /> Contactos
            </a>

          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar