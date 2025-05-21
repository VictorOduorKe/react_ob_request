import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import "./css/variable.css";
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home/>
      </main>
    </>
  )
}

export default App