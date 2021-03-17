import React from 'react';
import './App.css';

function App() {
  const list = [
    { id: 1, title: "Tarefa 1", done: true },
    { id: 2, title: "Tarefa 2", done: false },
    { id: 3, title: "Tarefa 3", done: false }
  ]

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <ul className="todosList">
        {list.map(todo =>
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" onChange={() => { }} checked={todo.done} />
          </li>)
        }
      </ul>
      <form>
        <input type="text" placeholder="Digite a nova tarefa" />
        <br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default App;
