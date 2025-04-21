// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#journey">Journey</a>
        <a href="#quotes">Quotes</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
        <a href="#bucket">Bucket List</a>
      </div>
    </nav>
  );
};

export default Navbar;
