import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaBars, FaTimes, FaPhoneAlt, FaFacebook } from "react-icons/fa"
import './Navbar.css'

const Navbar = () => {
  const[isOpen, setisOpen] = useState(false)

  const toggleNav = () => {
    setisOpen(!isOpen)
  }

    return (
        <nav>
            <div href='/' className='Logo'>
          <img src='/Small_logo.jpg'/>
      </div>
      <div className="link" onClick={toggleNav}> 
        {isOpen ? <FaTimes /> : <FaBars />}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href='tel:+18019133046'><FaPhoneAlt /></a>
        <a href='mailto:dclandworksut@gmail.com'><MdEmail /></a>
        <a href='https://www.facebook.com/people/DC-Landworks/61557464499433/'><FaFacebook /></a>
        </ul>
        </div>
        </nav>
    )
}

export default Navbar