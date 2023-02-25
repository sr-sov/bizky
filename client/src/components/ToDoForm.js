import React, { useEffect, useRef, useState } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function ToDoForm() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    //get from local storage, run once
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    //set local storage everytime todos changes
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        //do not directly edit a state; copy first then save the copy
        const newTodos = [...todos];
        //find using id
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        //clear input
        todoNameRef.current.value = null
    };

    return (
        <>
        <div className="Container">
            <h1>To Do List</h1>
            <div className="toDoForm">
                <input ref={todoNameRef} type="text"></input>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ToDoList todos={todos} toggleTodo={toggleTodo}/>
        </div>
        </>
    )
}

export default ToDoForm;