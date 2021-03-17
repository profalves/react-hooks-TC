import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const context = useContext(TodoContext)

  const data = context.list.map(todo => (
    <TodoListItem key={todo.id} todo={todo} />
  ))

  return (
    <ul className="todosList">
      {data}
    </ul>
  )
}

export default TodoList