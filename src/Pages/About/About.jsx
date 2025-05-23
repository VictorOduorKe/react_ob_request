import React from 'react';
import "./About.css";
import desk1_image from "../../assets/desk1.png";

function About() {
  return (
    <>
      <section className="about" id='about'>
        <h2>About Us</h2>
        <div className="about-container">
          <div className="left">
            <img src={desk1_image} alt="desk1-image" />
          </div>
          <div className="right">
            <h3>OUR MISSION</h3>
            <p>
              Our mission is to provide a seamless experience for our users. We
              strive to make our services accessible and user-friendly.
            </p>
            <p>
              We believe in transparency and open communication. Our team is
              always ready to assist you with any questions or concerns.
            </p>
            <p>
              Thank you for choosing our services. We look forward to serving
              you!
                      </p>
                      <h3>OUR VISION</h3>
                      <p>
                          Our vision is to be the leading provider of online
                          services. We aim to revolutionize the way people
                          interact with technology, making it easier and more
                          accessible for everyone.
                      </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About