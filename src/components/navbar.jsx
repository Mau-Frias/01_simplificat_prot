import './navbar.css'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import navData from '../data/navbar.json'

function Navbar({ scrollPos }) {
  const links = navData.links
  const [isExpanded, setIsExpanded] = useState(false)
  const [fixed, setFixed] = useState(true)
  const navbarRef = useRef()

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setFixed(false)
    } else {
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
          <img src='/hamburger.svg' />
        </button>

        <ul className={`nb-menu ${isExpanded ? 'nb-expanded' : ''}`}>
          {links.map(({ route, name, iconClass }) => (
              <li key={name}>
                <NavLink to={route} className={'nb-link'}>
                  <i className={iconClass} /> {name}
                </NavLink>
              </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
