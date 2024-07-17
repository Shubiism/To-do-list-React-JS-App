// src/components/Filter.js
import React from 'react';
import Button from '@mui/material/Button';

const Filter = ({ filter, setFilter }) => {
    const buttonStyle = {
        marginRight: '2px', // Adjust spacing between buttons as needed
    };
    return (
        <div>
            <Button
                variant={filter === 'all' ? 'contained' : 'outlined'}
                onClick={() => setFilter('all')}
                style={buttonStyle}
            >
                All
            </Button>
            <Button
                variant={filter === 'completed' ? 'contained' : 'outlined'}
                onClick={() => setFilter('completed')}
                style={buttonStyle}
            >
                Completed
            </Button>
            <Button
                variant={filter === 'incomplete' ? 'contained' : 'outlined'}
                onClick={() => setFilter('incomplete')}
                style={buttonStyle}
            >
                Incomplete
            </Button>
        </div>
    );
};

export default Filter;
