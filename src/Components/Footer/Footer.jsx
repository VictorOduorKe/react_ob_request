import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
      <>
        <footer>
          <p>&copy; 2025 OB Request. All rights reserved.</p>
          <div className="social-media">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </footer>
      </>
    );
}

export default Footer