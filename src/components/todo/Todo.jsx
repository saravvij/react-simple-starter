import React from 'react'
import TodoInputBox from './TodoInputBox';
import TodoList from './TodoList.jsx';
import useTodoState from './useTodoState'
export default function Todo() {
    const { todos, addTodo, deleteTodo } = useTodoState();
    
    return(
        <div>
            <TodoInputBox addTodo={addTodo}></TodoInputBox>
            <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
        </div>
    );
}