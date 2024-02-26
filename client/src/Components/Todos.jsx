import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos, deleteTodo } from '../Redux/actions/index.js'
import {ALL_TODOS, DONE_TODOS, ACTIVE_TODOS} from '../Redux/actions/type.js'

// component
import Todo from './Todo'
import Tabs from './Tabs'


const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos)
    
    const currentTab = useSelector(state => state.currentTab)

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (
        <>
            <div className='mt-3 d-flex justify-content-center'>
                <Tabs currentTab = {currentTab}/>

                {
                    todos.some(todo => todo.done) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ) : null    
                }
            </div>
            <div>
                {getTodos().map(todo => <Todo key={todo._id} todo={todo} />)}
            </div>
        </>
    )
}

export default Todos;   
