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
            <ul className="nav-links">
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

