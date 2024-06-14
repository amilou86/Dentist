import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import HRDlogo1 from '../../assets/HRDlogo1.png';
import HRDlogo2 from '../../assets/HRDlogo2.png'
import HRDlogo3 from '../../assets/HRDlogo3.png'
import HRDlogo4 from '../../assets/HRDlogo4.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        < nav className={`container ${sticky ? 'dark-nav' : ''}`} >
            <img src={HRDlogo4} alt="logo" className='logo' />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Application Form">Application Form</Link>
                </li>
                <li>
                    <Link to="/FeesFinance">Fees & Finance</Link>
                </li>
                <li><button className='btn'>Contact Us</button>
                    <Link to="/Contact"></Link>
                </li>
            </ul>

        </nav >
    )

}

export default Navbar