import React, { useState } from 'react';
import '../styles.css'; 

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = () => {
    onUpdate(task._id, { title, status });
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div className="edit-mode">
          <input
            className="task-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="task-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <div className="btn-group">
            <button className="btn save" onClick={handleUpdate}>Save</button>
            <button className="btn cancel" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="display-mode">
          <div className="task-text">
            <h3>{task.title}</h3>
            <p className={`status ${task.status}`}>Status: {task.status}</p>
          </div>
          <div className="btn-group">
            <button className="btn edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn delete" onClick={() => onDelete(task._id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
