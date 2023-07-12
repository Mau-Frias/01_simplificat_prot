import './navbar.css'
import React,{useState,useEffect} from 'react';

const Navbar = () => {
  const navbar = document.querySelector('.navbar');
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position)
    if(scrollPos >= 500){
      navbar.classList.add('navbar-unfixed');
    }else{
      navbar.classList.remove('navbar-unfixed');
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })  
  return (
    <div className='navbar'>
      <div className="navbar-cont">
        <a href="/" className='navbar-logo'>
        <h1>Simplifíca-T</h1>
        </a>
        <ul className='navbar-menu'>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Nosotros</a></li>
          <li><a href="/">Conocenos</a></li>
          <li><a href="/">Contacto</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;