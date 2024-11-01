import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/'>
                    <img src='/Small_logo.jpg' alt="Logo"/>
                </Link>
            </div>
            <div className="links">
                    <Link to="/About">About</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Contact">Contact</Link>
            </div>
            <button className="quote">Get a Quote</button>
        </nav>
    );
};

export default Navbar;


