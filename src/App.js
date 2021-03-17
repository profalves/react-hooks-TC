import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([
    { id: 1, title: "Tarefa 1", done: true },
    { id: 2, title: "Tarefa 2", done: false },
    { id: 3, title: "Tarefa 3", done: false }
  ])

  const [total, setTotal] = useState(0)

  const handleInputChanged = (id) => {
    const newList = list.map(todo => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    })

    setList(newList)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target[0].value) return;
    setList([...list, {
      id: list.length + 1,
      title: e.target[0].value,
      done: false
    }])
    e.target[0].value = '';
  }

  useEffect(() => {
    const doneCounter = list.filter(todo => todo.done)
    setTotal(doneCounter.length)
  }, [list])

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <strong>Tarefas concluidas: {total}</strong>
      <ul className="todosList">
        {list.map(todo =>
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" onChange={() => handleInputChanged(todo.id)} checked={todo.done} />
          </li>)
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite a nova tarefa" />
        <br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default App;
