import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target[0].value) return;

    saveTodo(e.target[0].value);

    e.target[0].value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite a nova tarefa" />
      <br />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default AddTodo