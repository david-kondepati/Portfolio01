import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ContactForm from './ContactForm';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <HeroSection />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default Portfolio;