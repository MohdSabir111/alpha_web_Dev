import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {Routes , Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar  from './Navbar';

function App() {
  return (
    <>

          <Navbar/>

      <Routes >
        <Route  path="/"   element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </>
  );
}

export default App;
