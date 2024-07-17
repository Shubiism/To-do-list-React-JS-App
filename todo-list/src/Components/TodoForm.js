import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trim the task input and check if it's empty
        const trimmedTask = task.trim();
        if (!trimmedTask) {
            setError('Please enter a task.');
            return;
        }

        // Clear error state if input is valid
        setError('');

        // Add the task using the parent component's addTodo function
        addTodo(trimmedTask);
        setTask(''); // Clear the input field after adding task
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Enter a task"
                variant="outlined"
                size="medium"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
                sx={{ marginBottom: '8px' }}
                error={!!error}
                helperText={error}
            />
            <Button
                type="submit"
                variant="contained"
                size="small"
                color="primary"
            >
                Add Task
            </Button>
        </form>
    );
};

export default TodoForm;
