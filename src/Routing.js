import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';


const Routing = () => {
    const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoList todos={todos} deleteTodo={deleteTodo} />} />
                    <Route path="/add" element={<AddTodo addTodo={addTodo} todos={todos} />} />
                    <Route path="/edit/:id" element={<EditTodo todos={todos} updateTodo={updateTodo} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
