import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo = ({ addTodo, todos }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName) {
      setError('Task Name is required');
      return;
    }

    if (!priority) {
      setError('Priority is required');
      return;
    }

    if (dueDate && new Date(dueDate) <= new Date()) {
      setError('Due date must be in the future');
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      taskName,
      description,
      priority,
      status: 'Pending',
      dueDate,
    };

    addTodo(newTodo);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add TODO</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button className="primary-btn" type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTodo;