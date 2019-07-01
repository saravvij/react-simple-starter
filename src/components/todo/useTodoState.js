import { useState } from 'react';

export default function useTodoState() {
    const [todos, setTodo] = useState([]);

    const addTodo = (todo) => setTodo([...todos, todo]);
    const deleteTodo = (todo) => setTodo(todos.filter(t => t !== todo));

    return { todos, addTodo, deleteTodo };
}