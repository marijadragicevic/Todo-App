import React, { useState } from 'react';
import './Style/App.scss';
import Header from './Components/Header';
import Form from './Components/Form';
import { Todo } from './Components/model';
import TodoList from './Components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent, todo: string) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
  }


  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Form handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
