import React, { useEffect, useState } from 'react';
import './App.css';
import TodoProvider from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import DoneCounter from './components/DoneCounter';

function App() {
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TodoProvider>
        <DoneCounter />
        <TodoList />
        <AddTodo />
      </TodoProvider>
    </div>

  );
}

export default App;
