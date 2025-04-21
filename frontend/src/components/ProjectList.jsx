import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; 

const ProjectList = ({ projects, onDelete }) => {
  return (
    <div className="project-list-container">
      <h2 className="heading">Your Projects</h2>

      <div className="project-grid">
        {projects.map(project => (
          <div key={project._id} className="project-card">
            <Link to={`/projects/${project._id}/tasks`} className="project-link">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </Link>
            <button 
              onClick={() => onDelete(project._id)} 
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="empty-message">No projects found. Start by adding one!</p>
      )}
    </div>
  );
};

export default ProjectList;
