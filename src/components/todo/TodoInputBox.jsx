import React, { useState } from 'react';

export default function TodoInputBox({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        addTodo(todo);
        setTodo('');
    }

    handleChange()

    return (
        <div className="input-group-append">
            <input autoFocus type="text" className="form-control" onChange={(e) => setTodo(e.targetValue)}/>
            <button className="btn-primary" onClick={() => handleAddTodo()}>Add</button>
        </div>
    );
}
