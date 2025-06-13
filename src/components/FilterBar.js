import React from 'react';

export default function FilterBar({ statusFilter, priFilter, onFilterChange }) {
  const statuses = ['', 'to-do', 'in-progress', 'done'];
  const pris = ['', 'high', 'medium', 'low'];

  return (
    <div className="d-flex gap-3 mb-3">
      <select
        className="form-select w-auto"
        value={statusFilter}
        onChange={(e) => onFilterChange('status', e.target.value)}
      >
        <option value="">All Status</option>
        <option value="to-do">To-Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select
        className="form-select w-auto"
        value={priFilter}
        onChange={(e) => onFilterChange('priority', e.target.value)}
      >
        <option value="">All Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}
