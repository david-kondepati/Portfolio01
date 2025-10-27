import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines for a modern tech startup.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      title: 'Social Media Campaign',
      description: 'Creative social media designs for a 3-month marketing campaign that increased engagement by 150%.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop',
      title: 'Poster Design Series',
      description: 'Eye-catching poster series for a music festival featuring bold typography and vibrant color schemes.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=800&h=600&fit=crop',
      title: 'Magazine Layout',
      description: 'Editorial layout design for a lifestyle magazine with modern typography and compelling visual hierarchy.'
    }
  ];

  return (
    <section className="projects-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative projects
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