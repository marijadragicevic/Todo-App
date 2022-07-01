import React, { useState } from 'react';
import './Style/App.scss';
import Header from './Components/Header';
import Form from './Components/Form';
import { Todo } from './Components/model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos);

  console.log(todos);

  return (
    <div className="App">
      <Header />
      <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
