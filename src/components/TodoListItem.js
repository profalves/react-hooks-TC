import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoListItem = ({ todo }) => {
  const { checkDone } = useContext(TodoContext)

  const handleInputChanged = id => checkDone(id)

  return (
    <li key={todo.id}>
      {todo.title}
      <input type="checkbox" onChange={() => handleInputChanged(todo.id)} checked={todo.done} />
    </li>
  )
}

export default TodoListItem