import React, { useState } from 'react';
import './Style/App.scss';
import Header from './Components/Header';
import Form from './Components/Form';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
