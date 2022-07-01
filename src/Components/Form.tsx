import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    // when function isn't returning (void)
    handleAdd: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form className='form' onSubmit={(e) => handleAdd(e)}>
            <input
                type='input'
                placeholder='Enter a task'
                required
                className='form__input'
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            <button className='form__btn' type='submit'><AiOutlinePlus /></button>
        </form>
    )
}

export default Form