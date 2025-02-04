import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header(){
  return (
    <div className="header-container">
    <nav className='Navbar'>
        <ul>
        <li>
          <Link to="/">Lumiére </Link> 
        </li>
        <li className="hideonmobile">
          <Link to="/">Main Page</Link>  
        </li>
        <li className="hideonmobile">
          <Link to="/about">About</Link>
        </li>
        <li className="hideonmobile">
          <Link to="/services">Services</Link>
        </li>
        <li className="hideonmobile">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className='showonmobile'onClick={() => document.querySelector(".sidebar").style.display='block'} >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eebac5"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </li>
      </ul>

    </nav>
    <nav className="sidebar">
        <ul>
        <li onClick={() => document.querySelector(".sidebar").style.display='none'}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eebac5"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
        <li>
          <Link to="/">Lumiére </Link> 
        </li>
        <li>
          <Link to="/">Main Page</Link>  
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        
      </ul>

    </nav>
    </div>
  )
}

export default Header
