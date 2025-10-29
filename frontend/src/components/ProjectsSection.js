import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      title: 'Flow-Guided Real-Time Video Inpainting',
      description: 'Proposed a Flow-Guided Latent Diffusion Model (FGLDM) combining latent diffusion with RAFT-based optical flow for video restoration. Achieved 25 FPS in real-time with TensorRT optimization.',
      tech: 'PyTorch, TensorRT, RAFT, Latent Diffusion'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
      title: 'Railway Ticket Booking System',
      description: 'Built a full-stack ticket booking system using Spring Boot and MySQL. Implemented user login, ticket booking, and confirmation modules with responsive UI.',
      tech: 'Java, Spring Boot, MySQL, HTML/CSS/JS'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1495862433577-132cf24f867d?w=800&h=600&fit=crop',
      title: 'E-Voting System',
      description: 'Developed a secure and scalable e-voting platform with React.js frontend and Spring Boot backend. Designed REST APIs for voter authentication and result retrieval.',
      tech: 'React.js, Spring Boot, REST API, MySQL'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop',
      title: 'Industrial Object Detection',
      description: 'Contributed to object detection tasks using YOLO models for industrial use cases at BEL. Implemented machine life cycle prediction based on condition monitoring data.',
      tech: 'YOLO, Python, Computer Vision'
    }
  ];

  return (
    <section className="projects-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work in AI/ML and Full-Stack Development
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-6">
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    <i className="bi bi-code-slash"></i>
                    <span>{project.tech}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;