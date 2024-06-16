import React, { useState } from 'react'
import './Hero.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const handleClick = () => {
    const phoneNum = '447922715288';
    window.location.href = `https://wa.me/${phoneNum}`;
};

const Hero = () => {

    return (
        <section id="hero">
            <div className='hero container'>
                <div className='hero-text'>
                    <h1>Halton Road Dental Practice</h1>
                    <h2>01928 569293</h2>
                    <p> Halton Road Dental Practice<br />
                        254 Halton Road<br />
                        Runcorn<br />
                        Cheshire<br />
                        WA7 5RL</p>
                    <button className='btn' onClick={handleClick}>Message us now via WhatsApp <FaWhatsapp /></button>
                </div >
            </div >
        </section>
    );

};

export default Hero