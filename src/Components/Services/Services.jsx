import React from 'react'
import './Services.css'
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
    {
        image: routine, title: 'Routine Exam',
        description: ''
    },
    {
        image: cleaning, title: 'Professional Cleaning',
        description: ''
    },
    {
        image: fillings, title: 'Fillings & Root Treatments',
        description: ''
    },
    {
        image: dentures, title: " Dentures, Crowns & Bridges",
        description: ''
    },
    {
        image: sedation, title: 'Sedation',
        description: ''
    },
    {
        image: whitening, title: 'Teeth Whitening',
        description: ''
    },
    {
        image: botox, title: 'Botox & Fillers',
        description: ''
    },
    {
        image: invisalign, title: 'Invisalign',
        description: ''
    },
    {
        image: implants, title: 'Dental Implants',
        description: ''
    },
    {
        image: bonding, title: "Composite Bonding & Aesthetic Dentistry",
        description: ''
    },
    {
        image: crown, title: 'Crown Lengthening',
        description: ''
    },
    {
        image: finance, title: 'Chrysalis Finance',
        description: ''
    },
];

const Services = () => {


    return (
        <section id="services">
            <div className='services'>
                {servicesData.map((service) => (
                    <div className="service" key={service.title}>
                        <img src={service.image} alt={service.title + " image"} />
                        <div className="caption">
                            <p>{service.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
