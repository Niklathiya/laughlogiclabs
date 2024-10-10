import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = ({ todos, deleteTodo }) => {

    const getStatusClass = (status) => {
        switch (status) {
          case 'Pending':
            return 'status-pending';
          case 'In Progress':
            return 'status-inprogress';
          case 'Completed':
            return 'status-completed';
          default:
            return '';
        }
      };

  return (
    <div>
      <h2>TODO List</h2>
      <button className='add-btn'>
        <p><Link to="/add">Add New Task</Link></p>
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-content">
                <p>Task Name:- {todo.taskName}</p>
                <p>Task Description:- {todo.description}</p>
                <p>Task Proority:- {todo.priority}</p>
                <p>Task Due Date:- {todo.dueDate}</p>
                <div className='status-badge-box'>
                    <p className={`status-badge ${getStatusClass(todo.status)}`}>
                    {todo.status}
                    </p>
                </div>
            </div>
            <div className="todo-actions">
              <Link to={`/edit/${todo.id}`} className="edit-btn">Edit</Link>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;