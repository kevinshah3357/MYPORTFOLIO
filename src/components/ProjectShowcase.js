import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'E-commerce Storefront',
    description: 'A dynamic e-commerce application built with React and Redux.',
    imageUrl: '/images/ecommerce.jpg',
  },
  {
    id: 2,
    title: 'Social Media App',
    description: 'A social media platform with real-time chat and notifications.',
    imageUrl: '/images/socialmedia.jpg',
  },
  // more projects
];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="project-card" 
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selectedProject && 
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />}
    </section>
  );
};

export default ProjectShowcase;
