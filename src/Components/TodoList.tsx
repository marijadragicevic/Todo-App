import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/Contex';
import TodoItem from './TodoItem';


const TodoList: React.FC = () => {

    // destructuring and get access to todos and dispatch using Context
    const { todos } = useContext(Context);

    useEffect(() => {

        // need to stringify data that need to be set in localStorage
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos.length]);

    console.log(localStorage.todos);


    return <div className='todos'>
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
        ))}
    </div>
}

export default TodoList;