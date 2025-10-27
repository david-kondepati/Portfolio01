import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-gradient-overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="hero-content">
              <span className="hero-label">Updated</span>
              <h1 className="hero-title">
                PORTFOLIO
                <span className="hero-year">2024</span>
              </h1>
              <div className="hero-subtitle">
                <span className="subtitle-left">Graphic Design</span>
                <span className="subtitle-right">Your Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;