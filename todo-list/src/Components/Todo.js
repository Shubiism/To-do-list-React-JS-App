import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
    // Check if todo exists and has the 'completed' property
    if (!todo || typeof todo.completed === 'undefined') {
        return null; // or handle the case where todo is not defined
    }

    return (
        <div className="todo">
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : '' }}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.task}
            </span>
            <IconButton
                aria-label="delete"
                onClick={() => removeTodo(todo.id)}
                color="secondary"
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default Todo;
