import React from "react";
import ToDo from "./ToDo";

function TodoList({todos, toggleTodo}) {
    return (
        <div className="toDoList">
            <h3>List</h3>
            <ul>
                {todos.map(todo => {
                    return <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
                })}
            </ul>
        </div>
        
    )
}

export default TodoList;