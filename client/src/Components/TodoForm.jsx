import React, { useState } from 'react'
import { addNewTodo } from '../Redux/actions';
import { useDispatch } from 'react-redux';

const TodoForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewTodo(text));
        setText('');
    }

    const onChangeSubmit = (e) => {
        setText(e.target.value);
    }
    return (
        <form className='form d-flex justify-content-center' onSubmit={onFormSubmit}>
            <input type="text" className='input p-2 ' placeholder= "Enter Your Task..." onChange={onChangeSubmit} value={text}/>
        </form>
    )
}

export default TodoForm
