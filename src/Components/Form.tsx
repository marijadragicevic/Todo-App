import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";

const Form = () => {
    return (
        <form className='form'>
            <input type='input' placeholder='Enter a task' required className='form__input' />
            <button className='form__btn' type='submit'><AiOutlinePlus /></button>
        </form>
    )
}

export default Form