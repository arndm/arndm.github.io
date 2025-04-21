import React from 'react';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://www.linkedin.com/in/arindam-saha/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
    <a href="https://github.com/arndm" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://www.instagram.com/antidote_07" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.facebook.com/arindam.saha.549" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
  </div>
);

export default SocialLinks;
