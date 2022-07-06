import React from 'react';
import { Todo } from './model';
import TodoItem from './TodoItem';

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return <div className='todos'>
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
}

export default TodoList;