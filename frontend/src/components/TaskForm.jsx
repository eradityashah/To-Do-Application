import React, { useState } from 'react';
import '../styles.css';

const TaskForm = ({ onSubmit, projectId }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, status, projectId });
    setTitle('');
    setStatus('todo');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2 className="form-heading">Add New Task</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-select"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit" className="form-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
