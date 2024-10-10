import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTodo = ({ todos, updateTodo }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = todos.find((t) => t.id === parseInt(id));

  const [taskName, setTaskName] = useState(todo.taskName);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const [status, setStatus] = useState(todo.status);
  const [error, setError] = useState('');

  const handleUpdate = (e) => {
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

    const updatedTodo = {
      id: todo.id,
      taskName,
      description,
      priority,
      status,
      dueDate,
    };

    updateTodo(updatedTodo);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Edit TODO</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleUpdate}>
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
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
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
        <button className="btn" type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTodo;