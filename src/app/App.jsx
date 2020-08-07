import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './components/TodoList';
import { Context } from './shared/context';
import reducer from './shared/reducer';

export default function App() {
    const raw = localStorage.getItem('todos');
    const data = raw ? JSON.parse(raw) : [];
    const [state, dispatch] = useReducer(reducer, data);

    const [todoTitle, setTodoTitle] = useState('');

    useEffect(() => {
        const raw = JSON.stringify(state);
        localStorage.setItem('todos', raw);
    }, [state]);

    const addTodo = event => {
        if (event.key === 'Enter') {
            dispatch({ type: 'ADD_TODO', payload: todoTitle });
            setTodoTitle('');
        }
    };

    return (
        <Context.Provider value={{ dispatch }}>
            <div className="container">
                <h1>Todo app</h1>

                <div className="input-field">
                    <input
                        type="text"
                        value={todoTitle}
                        onChange={event => setTodoTitle(event.target.value)}
                        onKeyPress={addTodo}
                    />
                    <label>Todo name</label>
                </div>

                <TodoList todos={state} />
            </div>
        </Context.Provider>
    );
}
