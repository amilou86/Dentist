import React from 'react'
import './Services.css'
import { FaArrowPointer } from "react-icons/fa6";
import routine from '../../assets/routine.png'
import cleaning from '../../assets/cleaning.png'
import fillings from '../../assets/fillings.png'
import dentures from '../../assets/dentures.png'
import sedation from '../../assets/sedation.png'
import whitening from '../../assets/whitening.png'
import botox from '../../assets/botox.png'
import invisalign from '../../assets/invisalign.png'
import implants from '../../assets/implants.png'
import bonding from '../../assets/bonding.png'
import crown from '../../assets/crown.png'
import finance from '../../assets/finance.png'

const servicesData = [
    { image: routine, title: 'Routine Exam' },
    { image: cleaning, title: 'Professional Cleaning' },
    { image: fillings, title: 'Fillings & Root Treatments' },
    { image: dentures, title: " Dentures, Crowns & Bridges" },
    { image: sedation, title: 'Sedation' },
    { image: whitening, title: 'Teeth Whitening' },
    { image: botox, title: 'Botox & Fillers' },
    { image: invisalign, title: 'Invisalign' },
    { image: implants, title: 'Dental Implants' },
    { image: bonding, title: "Composite Bonding & Aesthetic Dentistry" },
    { image: crown, title: 'Crown Lengthening' },
    { image: finance, title: 'Chrysalis Finance' },
];


const Services = () => {
    return (
        <div className='services'>
            {servicesData.map((service) => (
                <div className="service" key={service.title}>
                    <img src={service.image} alt={service.title + " image"} />
                    <div className="caption">
                        <FaArrowPointer />
                        <p>{service.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Services