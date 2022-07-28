import React from 'react';
import './footer.css';
import {FaInstagram,FaTwitter} from 'react-icons/fa'
import {SiCodingninjas,SiGeeksforgeeks,SiGithub,SiLeetcode} from 'react-icons/si'
import {BiUpArrowCircle} from 'react-icons/bi'


const Footer = () => {
  return (
    <footer>
    {/* <a href="#" className='footer__logo'>Abhishek Singh</a> */}

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#qualification">Qualification</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://github.com/jayantmehta18" target='_blank' rel="noreferrer"><SiGithub className='footer__socials-icon'/></a>
      <a href="https://www.instagram.com/jayant.mehta18/" target='_blank' rel="noreferrer"><FaInstagram className='footer__socials-icon'/></a>
      <a href="https://www.instagram.com/jayant.mehta18/" target='_blank' rel="noreferrer"><SiLeetcode className='footer__socials-icon'/></a>
      <a href="https://twitter.com/JayantM21548025" target='_blank' rel="noreferrer"><FaTwitter className='footer__socials-icon'/></a>
      <a href="https://auth.geeksforgeeks.org/user/jayantmehta99jm/practice/" target='_blank' rel="noreferrer"><SiGeeksforgeeks className='footer__socials-icon'/></a>
    </div>

    <div className="footer__copyright">
      <h4>Made with &#10084; and 🍺</h4>
      <h4><strong>© Jayant Mehta</strong></h4>
    </div>

    <a href='#' className='footer__uparrow'>
      <BiUpArrowCircle/>
    </a>
    </footer>
  )
}

export default Footer