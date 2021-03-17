import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const DoneCounter = () => {
  const context = useContext(TodoContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const doneCounter = context.list.filter(todo => todo.done)
    setTotal(doneCounter.length)
  }, [context.list])

  return (
    <strong>Tarefas concluidas: {total}</strong>
  )
}

export default DoneCounter