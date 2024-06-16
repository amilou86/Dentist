import React from 'react'
import './Practice.css'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import { FaArrowRightLong } from "react-icons/fa6";

const handleClick = () => {
    // const
    window.location.href = 'https://www.instagram.com/haltondentist/'
}

const Practice = () => {
    return (
        <div className='practice'>
            <div className="gallery">
                <img src={gallery1} alt="gallery images" />
                <img src={gallery2} alt="gallery images" />
                <img src={gallery3} alt="gallery images" />
                <img src={gallery4} alt="gallery images" />
            </div>
            <button className='btn dark-btn' onClick={handleClick}>See Gallery <FaArrowRightLong /></button>
        </div>
    )
}

export default Practice
