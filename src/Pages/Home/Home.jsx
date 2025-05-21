import React from 'react';
import "./Home.css";
function Home() {
  return (
    <>
      <section className="home">
        <div className="home-container">
          <h2>WELCOME TO OB request page</h2>

          <div className="home-container-text">
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
              <a href="#register-login">GET STARTED</a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home