import React from 'react'
import "./Login.css"
function Login() {
  return (
    <>
      <section className="login" id="login">
        <h2>login here</h2>

        <form>
        
          <label htmlFor="National_id">national_id</label>
          <input
            type="number"
            id="national_id"
            name="national_id"
            placeholder="Enter your national_id"
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

export default Login