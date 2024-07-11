import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.imageUrl} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectModal;
