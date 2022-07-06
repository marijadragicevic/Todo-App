import React, { useState, useRef, useEffect } from 'react';
import { Todo } from './model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from "react-icons/md";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )));
        setEdit(false);
    }

    useEffect(() => {
        // focus input field by clcking on edit icon
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className='todos__item' onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit
                ? (<input type="text" className='todos__input' ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} required />)
                : todo.isDone
                    ? (<s className='todos__text'>{todo.todo}</s>)
                    : (<p className='todos__text'>{todo.todo}</p>)}

            <article className='todos__icons'>
                <i className='todos__icon' onClick={() => handleDone(todo.id)}><MdDone /></i>
                <i className='todos__icon'
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}><AiFillEdit /></i>
                <i className='todos__icon' onClick={() => handleDelete(todo.id)}><AiFillDelete /></i>
            </article>
        </form >
    )
}

export default TodoItem;
