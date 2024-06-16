import './Footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookSquare } from "react-icons/fa";

const links = [
    { id: 1, link: '#hero', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#services', title: 'Services' },
    { id: 4, link: '#contact', title: 'Contact' }
];

const socials = [
    { id: 1, link: 'https://www.instagram.com/haltondentist/', icon: <AiOutlineInstagram /> },
    { id: 2, link: 'https://x.com/DentistHalton', icon: <FaXTwitter /> },
    { id: 3, link: 'https://www.facebook.com/haltondentist', icon: <FaFacebookSquare /> }
];

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <div className="footer-socials">
                    <h3>Follow us on social media</h3>
                    {
                        socials.map(socials => (
                            <a
                                key={socials.id}
                                href={socials.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {socials.icon}
                            </a>
                        ))
                    }
                </div>
                <ul className='nav-menu'>
                    {links.map(fLink => (
                        <li key={fLink.id}>
                            <a href={fLink.link}>{fLink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
