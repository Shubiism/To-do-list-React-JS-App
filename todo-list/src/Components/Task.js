import React from 'react';
import './App.css';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`Task ${task.completed ? 'completed' : ''}`}>
            <p className="task-text">{task.text}</p>
            <div className="actions">
                <i className="fas fa-check-circle incompleted" onClick={() => onToggle(task.id)}></i>
                <i className="fas fa-trash delete-icon" onClick={() => onDelete(task.id)}></i>
            </div>
        </div>
    );
};

export default Task;
