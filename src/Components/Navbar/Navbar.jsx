import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>
          <a href="">Ob Request</a>
        </h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Register</li>
            <li>Login</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar