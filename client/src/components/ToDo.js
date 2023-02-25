import React from "react";

export default function ToDo({todo, toggleTodo}) {

    function handleClickTodo() {
        toggleTodo(todo.id)
    }
    return (
        <ul>
            <label>{todo.name}</label>
            <input onChange={handleClickTodo} type="checkbox" checked={todo.complete} />
        </ul>
    )
}