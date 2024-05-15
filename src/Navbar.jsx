import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div>
        <a href='/' className='Logo'>
          <img src='/Small_logo.jpg'/>
        </a>
      </div>
      <div>
        <a href='tel:+18019133046'><FaPhoneAlt /></a>
        <a href='mailto:dclandworksut@gmail.com'><MdEmail /></a>
        <a href='https://www.facebook.com/people/DC-Landworks/61557464499433/'><FaFacebook /></a>
      </div>
        </div>
    )
}

export default Navbar