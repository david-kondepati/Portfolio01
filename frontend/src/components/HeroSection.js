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
                <span className="hero-year">2025</span>
              </h1>
              <div className="hero-subtitle">
                <span className="subtitle-left">AI/ML Engineer</span>
                <span className="subtitle-right">David Satya Vikas Kondepati</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;