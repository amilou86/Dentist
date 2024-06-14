import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'

function App() {
  console.log("App component is being rendered.");
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <About />
          <Title subTitle='Our Services' title='What We Offer' />
          <Services />
        </div>
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
