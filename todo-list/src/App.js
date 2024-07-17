// src/App.js
import React from 'react';
import './App.css';
import TodoWrapper from './Components/TodoWrapper';
const App = () => {
  return (
    <div className="App">
      <h1 className='todo-heading'>To-Do List</h1>
      <TodoWrapper />
    </div>
  );
};

export default App;
