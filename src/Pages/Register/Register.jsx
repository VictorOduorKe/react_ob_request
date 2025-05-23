import React from 'react'
import "./Register.css"
const Register = () => {
  return (
    <>
      <section className="register" id="register">
        <h2>Register here</h2>

              <form>
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your  full name" />
          <label htmlFor="National_id">national_id</label>
          <input
            type="number"
            id="national_id"
            name="national_id"
            placeholder="Enter your national_id"
                  />
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="phone">phone</label>
          <input
            type="tel"
            name='phone'
            id='phone'
            placeholder='Enter your phone'
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}

export default Register