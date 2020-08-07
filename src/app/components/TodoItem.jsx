import React, { useContext } from 'react';
import { Context } from '../shared/context';

export default function TodoItem({ title, id, completed }) {
    const { dispatch } = useContext(Context);

    const classes = ['todo'];

    if (completed) {
        classes.push('completed');
    }

    function toggleTodo(id) {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    }

    function removeTodo(id) {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    }

    return (
        <li className="todo">
            <label>
                <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />

                <span>{title}</span>

                <i className="material-icons red-text" onClick={() => removeTodo(id)}>
                    delete
                </i>
            </label>
        </li>
    );
}
