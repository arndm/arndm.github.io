// src/components/Hero.js
import React from 'react';
import './Hero.css';
import bg from '../assets/hero-bg.jpg';

const Hero = () => (
  <section
    className="hero"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="hero-content">
      <h1>Arindam Saha</h1>
      <p>Software Engineer | Multi Cloud | Building AI Applications</p>
    </div>
  </section>
);

export default Hero;
