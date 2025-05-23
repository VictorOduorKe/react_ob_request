import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h2>WELCOME TO OB request page</h2>

          <div className="hero-container-text">
            <h3></h3>
            <p>
              Welcome to the OB request page. Here you can find all the
              information you need about our services.
            </p>
            <p>
              We are dedicated to providing the best experience for our users.
              If you have any questions, feel free to reach out.
            </p>
            <p>
              Our team is here to assist you with any inquiries you may have.
              Thank you for visiting our page!
            </p>
            <p>
              We hope you find everything you need. If you have any feedback,
              please let us know.
            </p>
            <p>Stay tuned for more updates and features coming soon!</p>
            <span>
              <Link to="/register">Get Started</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero