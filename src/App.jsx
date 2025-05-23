import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import "./css/variable.css";
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';



const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register   />} />
            </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App