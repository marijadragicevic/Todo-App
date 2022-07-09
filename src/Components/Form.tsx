import React, { useContext, useRef, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { Context } from '../Context/Contex';


const Form: React.FC = () => {
    const [todo, setTodo] = useState<string>("");

    //get reference 
    const inputRef = useRef<HTMLInputElement>(null);

    // destructuring and get access to todos and dispatch using Context
    const { dispatch } = useContext(Context);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch({ type: "ADD_TODO", payload: todo });
        setTodo("");
        // remove shadow after submiting if current is diffrent from null
        inputRef.current?.blur();
    }

    return (
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            {/* get value from input field by setting the todo state onChange on input */}
            <input className='form__input' value={todo} onChange={(e) => setTodo(e.target.value)} ref={inputRef} type='input' placeholder='Enter a task' required />
            <button className='form__btn' type='submit'><AiOutlinePlus /></button>
        </form>
    )
}

export default Form