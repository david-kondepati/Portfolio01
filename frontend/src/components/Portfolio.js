import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactForm from './ContactForm';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
};

export default Portfolio;