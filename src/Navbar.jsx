import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href='/'>
                    <img src='/Small_logo.jpg' alt="Logo"/>
                </a>
            </div>
            <div className="links">
                    <a href="About">About</a>
                    <a href="Services">Services</a>
                    <a href="Contact">Contact</a>
            </div>
            <ul className="nav-links">
                <button className="quote" >Get a Quote</button>
                <li>
                    <a href='tel:+18019133046'><FaPhoneAlt /></a>
                </li>
                <li>
                    <a href='mailto:dclandworksut@gmail.com'><MdEmail /></a>
                </li>
                <li>
                    <a href='https://www.facebook.com/people/DC-Landworks/61557464499433/'><FaFacebook /></a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

