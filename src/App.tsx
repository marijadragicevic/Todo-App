import React from 'react';
import './Style/App.scss';
import { Header, Form, TodoList } from './Components/index';
import ContextProvider from './Context/Contex';

const App: React.FC = () => {

  return (
    <div className="App">

      <div className='container'>
        <ContextProvider>
          <Header />
          <Form />
          <TodoList />
        </ContextProvider>
      </div>

    </div>
  );
}

export default App;
