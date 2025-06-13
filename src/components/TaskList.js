import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onEdit, onDelete }) {
  const order = { high: 0, medium: 1, low: 2 };
  const sorted = [...tasks].sort((a,b) => order[a.priority] - order[b.priority]);
  return (
    <>
      {sorted.map(task => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </>
  );
}
