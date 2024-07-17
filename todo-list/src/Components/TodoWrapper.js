// src/components/TodoWrapper.js
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Filter from './Filter';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    // Load todos from localStorage on component mount
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Add a new todo to the list
    const addTodo = (task) => {
        const newTodo = { id: uuidv4(), task, completed: false };
        setTodos([...todos, newTodo]);
    };

    // Toggle the completion status of a todo
    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Remove a todo from the list
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Filter todos based on the selected filter
    const getFilteredTodos = () => {
        if (filter === 'completed') {
            return todos.filter(todo => todo.completed);
        } else if (filter === 'incomplete') {
            return todos.filter(todo => !todo.completed);
        } else {
            return todos;
        }
    };

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo} />
            <Filter filter={filter} setFilter={setFilter} />
            <TodoList
                todos={getFilteredTodos()}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
            />
        </div>
    );
};

export default TodoWrapper;
