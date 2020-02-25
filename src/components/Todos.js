import React from 'react';
import './TodoStyle.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Todos = ({ todos, deleteTodo, handleCheckChange }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id} >

                    <div className="wrapper" >
                        <label>
                            <input type="checkbox" defaultChecked={todo.isChecked} onChange={() => handleCheckChange(todo.id)} />
                            <span className={todo.isChecked?"todoText":"inactivetodoText"}>{todo.content}</span>
                        </label>
                        <FontAwesomeIcon color={todo.isChecked?"rgb(14, 219, 14)":"black"}  onClick={() => deleteTodo(todo.id)} icon={faTrash} />
                    </div>
                </div>
            )
        })
    ) : (
            <p className="center">You have no todos left</p>
        )

    return (
        <div className="todos collection">
            {
                todoList
            }
        </div>
    )
}

export default Todos