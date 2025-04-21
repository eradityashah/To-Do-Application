import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleCreateProject = async (projectData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/projects', projectData);
      setProjects([...projects, response.data]);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${projectId}`);
      setProjects(projects.filter(project => project._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="projects-page">
      <h1>Project Tracker</h1>
      <ProjectForm onSubmit={handleCreateProject} />
      <ProjectList projects={projects} onDelete={handleDeleteProject} />
    </div>
  );
};

export default ProjectsPage;