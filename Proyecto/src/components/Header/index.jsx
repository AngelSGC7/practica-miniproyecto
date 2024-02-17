import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
        <nav className='header'>
        <a href="#" className='header-logo'>Habanna</a>
        <ul className='header-options'>
            <li>
                <a href="/" className='header-link'>home</a>
            </li>
            <li>
                <a href="/Information" className='header-link'>Peliculas</a>
            </li>
            <li>
                <a href="/API" className='header-link'>Information</a>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default Header