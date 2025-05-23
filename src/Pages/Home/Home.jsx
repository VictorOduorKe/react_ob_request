import React from 'react';
import "./Home.css";
import Hero from '../Hero/Hero';
import About from '../About/About';
import Contact from '../Contact/Contact';
function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Contact id="contact" />  
      </main>
    </>
  );
}

export default Home