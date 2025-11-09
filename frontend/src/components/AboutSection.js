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
                  src="/images/suite.png?w=400&h=400&fit=crop"
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
                  My Name is <strong>David Satya Vikas Kondepati</strong>. I am an <strong className="highlight">Java Full Stack Developer and ML Engineer</strong> and Full-Stack Developer based in Bangalore. I am currently pursuing my Bachelor of Engineering in Artificial Intelligence and Machine Learning at Acharya Institute of Technology with a CGPA of 8.6. I specialize in building intelligent systems using deep learning, computer vision, and modern web technologies. I am passionate about solving real-world problems through AI/ML and creating scalable full-stack applications.
                </p>
                <div className="contact-info">
                  <a href="mailto:davidsvk49@gmail.com" className="contact-badge">
                    <i className="bi bi-envelope-fill"></i>
                    davidsvk49@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/david-satya" target="_blank" rel="noopener noreferrer" className="contact-badge">
                    <i className="bi bi-linkedin"></i>
                    david-satya
                  </a>
                  <a href="tel:+917674054249" className="contact-badge">
                    <i className="bi bi-telephone-fill"></i>
                    +91 7674054249
                  </a>
                  <a href="https://github.com/david-kondepati" target="_blank" rel="noopener noreferrer" className="contact-badge">
                    <i className="bi bi-github"></i>
                    david-kondepati
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
                <span className="year-badge">Sep 2022 - Sep 2026</span>
                <h4 className="education-school">Acharya Institute of Technology</h4>
                <p className="education-degree">Bachelor of Engineering in AI & ML</p>
                <p className="education-degree">CGPA: 8.6 | Bangalore, KA</p>
              </div>
              <div className="education-item mt-4">
                <span className="year-badge">Sep 2020 - Jul 2022</span>
                <h4 className="education-school">FIITJEE Junior College</h4>
                <p className="education-degree">Intermediate (MPC)</p>
                <p className="education-degree">95% | Vijayawada, AP</p>
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
                  <span className="year-badge">July 2025 - Aug 2025</span>
                  <h4 className="experience-title">Bharat Electronics Limited (BEL)</h4>
                  <p className="experience-role">AI/ML Intern</p>
                  <p className="experience-description">Worked on object detection using YOLO models and machine life cycle prediction in industrial automation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col-lg-4">
            <div className="info-card">
              <h3 className="info-card-title">Core Skills</h3>
              <div className="skills-list">
                <div className="skill-item">Critical Thinking</div>
                <div className="skill-item">Problem Solving</div>
                <div className="skill-item">Communication</div>
                <div className="skill-item">Team Collaboration</div>
              </div>

              <h3 className="info-card-title mt-4">Languages</h3>
              <div className="language-list">
                <div className="language-item">
                  <span>English</span>
                  <span className="language-level">(Fluent)</span>
                </div>
                <div className="language-item">
                  <span>Telugu</span>
                  <span className="language-level">(Native)</span>
                </div>
                <div className="language-item">
                  <span>Kannada</span>
                  <span className="language-level">(Fluent)</span>
                </div>
                <div className="language-item">
                  <span>Hindi</span>
                  <span className="language-level">(intermediate)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="info-card">
              <h3 className="info-card-title">Technical Skills</h3>
              <div className="row g-3">
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">AI</div>
                    <div>
                      <h5 className="software-name">AI/ML</h5>
                      <p className="software-skill">PyTorch, YOLO, TensorRT, OpenCV, scikit-learn</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">BE</div>
                    <div>
                      <h5 className="software-name">Backend</h5>
                      <p className="software-skill">Spring Boot, REST APIs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">FE</div>
                    <div>
                      <h5 className="software-name">Frontend</h5>
                      <p className="software-skill">React.js, Bootstrap</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="software-item">
                    <div className="software-icon">DB</div>
                    <div>
                      <h5 className="software-name">Database</h5>
                      <p className="software-skill">MySQL, Oracle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 mt-2">
                <div className="col-md-4 col-6">
                  <div className="tech-badge">Java</div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="tech-badge">Python</div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="tech-badge">AWS(Basics)</div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="tech-badge">SQL/NoSQL</div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="tech-badge">React.js</div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="tech-badge">DevSecOp Tools</div>
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