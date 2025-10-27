import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="container">
        {/* Introduction Card */}
        <div className="intro-card">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <div className="profile-image-wrapper">
                <div className="profile-image-border"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="intro-content">
                <h2 className="intro-heading">
                  <span className="hello-text">HELLO</span>
                  <span className="exclamation">!</span>
                </h2>
                <p className="intro-description">
                  My Name is <strong>Your Name</strong>. But people called me <strong className="highlight">Designer</strong>.
                  I am a Graphic Designer based in Your City. I have been working as a
                  freelance graphic designer for about 5 years. I love art and visual things. I
                  usually work on projects like branding, logo design, social media design,
                  poster design, and layouting. I am passionate about pushing the
                  boundaries of design and exploring new skills.
                </p>
                <div className="contact-info">
                  <a href="mailto:contact@example.com" className="contact-badge">
                    <i className="bi bi-envelope-fill"></i>
                    contact@example.com
                  </a>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="contact-badge">
                    <i className="bi bi-behance"></i>
                    behance.net/yourname
                  </a>
                  <a href="tel:+1234567890" className="contact-badge">
                    <i className="bi bi-telephone-fill"></i>
                    +123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education, Experience, Skills Grid */}
        <div className="row g-4 mt-4">
          {/* Education */}
          <div className="col-lg-4">
            <div className="info-card">
              <h3 className="info-card-title">Education</h3>
              <div className="education-item">
                <span className="year-badge">2020 - 2024</span>
                <h4 className="education-school">Design University, City</h4>
                <p className="education-degree">Bachelor of Visual Communication Design</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="col-lg-4">
            <div className="info-card">
              <h3 className="info-card-title">Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span className="year-badge">2019 - present</span>
                  <h4 className="experience-title">Freelance</h4>
                  <p className="experience-role">Graphic Designer</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span className="year-badge">2023</span>
                  <h4 className="experience-title">Digital Agency</h4>
                  <p className="experience-role">Graphic Designer</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span className="year-badge">2024</span>
                  <h4 className="experience-title">Creative Studio</h4>
                  <p className="experience-role">Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col-lg-4">
            <div className="info-card">
              <h3 className="info-card-title">Skills</h3>
              <div className="skills-list">
                <div className="skill-item">Attention to detail</div>
                <div className="skill-item">Love learning</div>
                <div className="skill-item">Time Management</div>
                <div className="skill-item">Creative</div>
              </div>

              <h3 className="info-card-title mt-4">Language</h3>
              <div className="language-list">
                <div className="language-item">
                  <span>English</span>
                  <span className="language-level">(Intermediate)</span>
                </div>
                <div className="language-item">
                  <span>Spanish</span>
                  <span className="language-level">(Native)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software Skills */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="info-card">
              <h3 className="info-card-title">Software Skills</h3>
              <div className="row g-3">
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">Ps</div>
                    <div>
                      <h5 className="software-name">Photoshop</h5>
                      <p className="software-skill">Image editing</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">Ai</div>
                    <div>
                      <h5 className="software-name">Illustrator</h5>
                      <p className="software-skill">Vector drawing</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">Pr</div>
                    <div>
                      <h5 className="software-name">Premiere Pro</h5>
                      <p className="software-skill">Video editing</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">Ae</div>
                    <div>
                      <h5 className="software-name">After Effects</h5>
                      <p className="software-skill">Animation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;