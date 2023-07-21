import './navbar.css'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({scrollPos}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [fixed, setFixed] = useState(true)
  const navbarRef = useRef()

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setFixed(false)
    }
    else {
      setFixed(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${fixed ? '' : 'nb-unfixed'}`} ref={navbarRef}>
      <div className='nb-cont'>
        <a to='/' className='nb-logo'>
          <h1>Simplifíca-T</h1>
        </a>
        <button className='nb-hamburger' onClick={handleClick}>
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

        <ul className={`nb-menu ${isExpanded ? 'nb-expanded' : ''}`}>
          <li>
            <NavLink to='/' className='nb-link'>
              <i className='fa-solid fa-house fa-xs' /> Inicio
            </NavLink>
          </li>
          <hr className='nb-separator' />
          <li>
            <NavLink to='/nosotros' className='nb-link'>
              <i className='fa-solid fa-users fa-xs' /> Nosotros
            </NavLink>
          </li>
          <hr className='nb-separator' />
          <li>
            <NavLink to='/valores' className='nb-link'>
              <i className='fa-solid fa-heart fa-xs' /> Valores
            </NavLink>
          </li>
          <hr className='nb-separator' />
          <li>
            <NavLink to='/contacto' className='nb-link'>
              <i className='fa-solid fa-comments fa-xs' /> Contactos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
