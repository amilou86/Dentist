import React, { useState } from 'react'
import './Hero.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {

    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Halton Road Dental Practice</h1>
                <h2>01928 569293</h2>
                <p> Halton Road Dental Practice<br />
                    254 Halton Road<br />
                    Runcorn<br />
                    Cheshire<br />
                    WA7 5RL</p>
                <button className='btn'>Explore More <FaArrowRightLong /></button>
            </div >
        </div >
    );

};

export default Hero