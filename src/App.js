// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import { loadTasks, saveTasks } from './utils';
import { Button } from 'react-bootstrap';

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Contoh Task',
      description: 'Ini adalah deskripsi task contoh',
      priority: 'high',
      status: 'to-do'
    }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [priFilter, setPriFilter] = useState('');

  useEffect(() => setTasks(loadTasks()), []);
  useEffect(() => saveTasks(tasks), [tasks]);

  const openForm = (task = null) => {
    setEditTask(task);
    setShowForm(true);
  };
  const closeForm = () => setShowForm(false);

  const handleSubmit = (t) => {
    if (t.id) {
      setTasks(tasks.map(x => x.id === t.id ? t : x));
    } else {
      setTasks([...tasks, { ...t, id: Date.now() }]);
    }
  };

  const filtered = tasks.filter(t =>
    (statusFilter ? t.status === statusFilter : true) &&
    (priFilter ? t.priority === priFilter : true)
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🗂️ Task Manager</h2>
      <Button variant="primary" onClick={() => openForm()}>+ New Task</Button>
      <FilterBar
        statusFilter={statusFilter}
        priFilter={priFilter}
        onFilterChange={(type, val) =>
          type === 'status' ? setStatusFilter(val) : setPriFilter(val)
        }
      />
      <TaskList tasks={filtered} onEdit={openForm} onDelete={(id) => setTasks(tasks.filter(t => t.id !== id))} />
      <TaskForm
        show={showForm}
        onClose={closeForm}
        onSubmit={handleSubmit}
        taskToEdit={editTask}
      />
    </div>
  );
}
