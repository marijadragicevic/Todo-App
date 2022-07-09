import React, { useState, useRef, useEffect, useContext } from 'react';
import { Todo } from './model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from "react-icons/md";
import { Context } from '../Context/Contex';

type Props = {
    todo: Todo,
}

const TodoItem: React.FC<Props> = ({ todo }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    // get reference
    const inputRef = useRef<HTMLInputElement>(null);

    // destructuring and get access to todos and dispatch using Context
    const { dispatch } = useContext(Context);

    const { id, isDone } = todo;

    // edit todo and set editTodo as new todo on submit
    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "EDIT_TODO", payload: { id, editTodo } });
        setEdit(false);
    }

    // toggle edit state by clicking on edit icon
    const handleClick = () => {
        if (!edit && !isDone) {
            setEdit(!edit);
        }
    }

    useEffect(() => {

        // focus input field by clcking on edit icon
        inputRef.current?.focus();

    }, [edit]);

    return (
        <form className='todos__item' onSubmit={(e) => handleEdit(e)}>
            {edit
                ? (<input type="text" className='todos__input' ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} required />)
                : todo.isDone
                    ? (<s className='todos__text'>{todo.todo}</s>)
                    : (<p className='todos__text'>{todo.todo}</p>)
            }

            <article className='todos__icons'>
                <i className='todos__icon' onClick={() => dispatch({ type: "DONE_TODO", payload: id })}><MdDone /></i>
                <i className='todos__icon' onClick={() => handleClick()}><AiFillEdit /></i>
                <i className='todos__icon' onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}><AiFillDelete /></i>
            </article>
        </form >
    )
}

export default TodoItem;
