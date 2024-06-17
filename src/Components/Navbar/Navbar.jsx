import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HRDlogo4 from '../../assets/HRDlogo4.png';
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
    const links = [
        { id: 1, link: '#hero', title: 'Home' },
        { id: 2, link: '#about', title: 'About' },
        { id: 3, link: '#services', title: 'Services' },
        { id: 4, link: '#fees', title: 'Fees & Finance' },
        { id: 5, link: '#contact', title: 'Contact' },
    ];

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={HRDlogo4} alt="logo" className="logo" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                {links.map((link) => (
                    <li key={link.id}>
                        {link.id === 4 ? ( // Check if it's the Fees & Finance item
                            <Link
                                to="../../assets/fee-guide.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.title}
                            </Link>
                        ) : (
                            <a href={link.link}>{link.title}</a>
                        )}
                    </li>
                ))}
            </ul>
            <p className='menu-icon' onClick={toggleMenu}>Navbar <IoIosCloseCircle /></p>
        </nav>
    );
};

export default Navbar;
