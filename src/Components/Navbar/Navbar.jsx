import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import HRDlogo1 from '../../assets/HRDlogo1.png';
import HRDlogo2 from '../../assets/HRDlogo2.png'
import HRDlogo3 from '../../assets/HRDlogo3.png'
import HRDlogo4 from '../../assets/HRDlogo4.png'

const Navbar = () => {
    const links = [
        { id: 1, link: '#hero', title: 'Home' },
        { id: 2, link: '#about', title: 'About' },
        { id: 3, link: '#services', title: 'Services' },
        { id: 4, link: '#application', title: 'Application Form' },
        { id: 5, link: '#fees', title: 'Fees & Finance' },
        { id: 6, link: '#contact', title: 'Contact' },
    ];

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={HRDlogo4} alt="logo" className="logo" />
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.link}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
