import React from 'react'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>
          <Link to="/" className='link'>OB Request</Link>
        </h1>
        <nav>
          <ul>
            <li><Link smooth to="/#about" className='link'>About</Link></li>
            <li><Link to="/register" className='link'>Register</Link></li>
            <li><Link to="/login" className='link'>Login</Link></li>
            <li><Link smooth to="/#contact" className='link'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar