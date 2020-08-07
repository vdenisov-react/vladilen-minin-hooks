import React, { useContext } from 'react';
import { Context } from '../shared/context';

export default function TodoItem({ title, id, completed }) {
    const { toggleTodo, removeTodo } = useContext(Context);

    const classes = ['todo'];

    if (completed) {
        classes.push('completed');
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
