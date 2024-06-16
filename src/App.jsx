import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import Practice from "./Components/Practice/Practice";
import Reviews from "./Components/Reviews/Reviews";
import Contact from "./Components/Contact/Contact"
import Footer from './Components/Footer/Footer'
import Team from './Components/Team/Team'

function App() {
  console.log("App component is being rendered.");
  return (
    <Router>

      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle='Our Services' title='What We Offer' />
        <Services />
        <Title subTitle='Gallery' title='' />
        <Practice />
        <Title subTitle='Reviews' title='What Our Patients Say' />
        <Reviews />
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact />
      </div>
      <div className="container">
        <Routes>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          {/* <Route path="/Application Form" element={<Application />} />
          <Route path="/Fees" element={<Fees />} /> */}
        </Routes>
      </div>
      <Team />
      <Footer />
    </Router>
  );
}

export default App
