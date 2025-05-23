import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
      <>
          <section className="contact" id="contact">
              <h2>Contact Us</h2>
              
              <form>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" />
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" />
                  <label htmlFor="phone">Phone No</label>
                  <input type="tel" name='phone' id='phone' placeholder='Enter your phone' />
                  <label htmlFor="message">Message</label>
                  <textarea placeholder="Enter your message" id='message' name='message'></textarea>
                  <button type="submit">Send</button>
              </form>
          </section>
      </>
  )
}

export default Contact