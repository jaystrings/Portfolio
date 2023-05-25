import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
const Footer = () => {
  return (
<footer>
    <a href="#" className='footer__logo'>Adejumo John</a>
    <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
        <a href="https://web.facebook.com/john.adejumo2"><FaFacebook/></a>
        <a href="https://www.instagram.com/jay_strings/"><FiInstagram/></a>
        <a href="https://twitter.com/manHasnullName"><FiTwitter/></a>
    </div>
    <div className="footer__copyright">
        <small>&copy;Adejumo John. All rights reserved</small>
    </div>

</footer>

  )
}

export default Footer
