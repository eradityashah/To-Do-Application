import React from 'react';
import TaskItem from './TaskItem';
import '../styles.css'; 

const TaskList = ({ tasks, projectId, onUpdate, onDelete }) => {
  return (
    <div className="task-list-container">
      <h2 className="task-heading">Tasks</h2>
      {tasks.length > 0 ? (
        <div className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <p className="no-tasks-msg">No tasks available. You can add one below.</p>
      )}
    </div>
  );
};

export default TaskList;
