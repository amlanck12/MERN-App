import React from 'react'
import { toggleTodo, updateTodo, deleteTodo } from '../Redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo?.data)

    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);
        dispatch(updateTodo(todo._id, text))
    }

    return (
        <div className="container mt-3">
            <div className="row m-1">
                <li onClick={() => dispatch(toggleTodo(todo._id))}
                    style={{ textDecoration: todo.done ? 'line-through' : '', color: todo.done ? 'black' : 'white' }}
                    className='listItems p-2'>
                    <span style={{ display: editing ? 'none' : '' }}
                        className='m-2'>{todo?.data}</span>

                    <form onSubmit={onFormSubmit} style={{ display: editing ? 'inline' : 'none' }}>
                        <input type='text' value={text} className='m-1' onChange={(e) => setText(e.target.value)} />
                    </form>

                    <span>
                        <button onClick={() => dispatch(deleteTodo(todo._id))} type="button" className="btn btn-light m-1 icons">Remove</button>
                        <button onClick={() => setEditing(prevState => !prevState)} type="button" className="btn btn-primary m-1 icons ">Update</button>
                    </span>
                </li>
            </div>
        </div>

    )
}

export default Todo
