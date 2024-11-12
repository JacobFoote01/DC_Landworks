import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Contact');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/'>
                    <img src='/Small_logo.jpg' alt="Logo" />
                </Link>
            </div>
            <div className={`links ${isOpen ? "open" : ""}`}>
                <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/Services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
                <button className="quote" onClick={handleClick}>Get a Quote</button>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <RxHamburgerMenu />
            </button>
        </nav>
    );
};

export default Navbar;