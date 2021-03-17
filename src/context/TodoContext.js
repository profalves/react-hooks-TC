import React, { useState, createContext } from 'react'

export const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [list, setList] = useState([
    { id: 1, title: "Ir pra academia", done: true },
    { id: 2, title: "Ir ao Supermercado", done: false },
    { id: 3, title: "Estudar React", done: false }
  ])

  const saveTodo = todo => {
    const newTodo = {
      id: list.length + 1,
      title: todo,
      done: false,
    }
    setList([...list, newTodo])
  }

  const checkDone = id => {
    const newList = list.map(todo => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    })

    setList(newList)
  }

  return (
    <TodoContext.Provider value={{ list, saveTodo, checkDone }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider