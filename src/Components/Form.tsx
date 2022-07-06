import React, { useRef, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";

// type of props
type Props = {
    handleAdd: (e: React.FormEvent, todo: string) => void
}

const Form: React.FC<Props> = ({ handleAdd }) => {
    const [todo, setTodo] = useState<string>("");
    //get reference 
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='form' onSubmit={(e) => {
            handleAdd(e, todo);
            // remove shadow after submiting if current is diffrent from null
            inputRef.current?.blur();
        }}>
            {/* get value from input field by setting the todo state onChange on input */}
            <input ref={inputRef} type='input' placeholder='Enter a task' required className='form__input' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className='form__btn' type='submit'><AiOutlinePlus /></button>
        </form>
    )
}

export default Form