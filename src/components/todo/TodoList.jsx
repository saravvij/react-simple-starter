import React from 'react'

export default function TodoList({ todos }) {
    return (
        <div>
            <li>
                {todos.map(todo => <ul>todo</ul>)}
            </li>
        </div>
    );
}