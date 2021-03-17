import React, { useEffect, useState } from 'react';
import './App.css';
import TodoProvider from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {

  const [total, setTotal] = useState(0)

  const handleInputChanged = (id) => {

  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target[0].value) return;

  }

  useEffect(() => {
    const doneCounter = list.filter(todo => todo.done)
    setTotal(doneCounter.length)
  }, [list])

  return (
    <TodoProvider>
      <TodoList />
      <AddTodo />
    </TodoProvider>
  );
}

export default App;
