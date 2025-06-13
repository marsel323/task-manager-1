import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const initial = {
  title: '', description: '', priority: 'medium', status: 'to-do'
};

export default function TaskForm({ show, onClose, onSubmit, taskToEdit }) {
  const [task, setTask] = useState(initial);

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
    else setTask(initial);
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (task.title.trim()) {
      onSubmit(task);
      onClose();
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? 'Edit Task' : 'New Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" value={task.title} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={task.description} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Priority</Form.Label>
            <Form.Select name="priority" value={task.priority} onChange={handleChange}>
              <option>high</option><option>medium</option><option>low</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" value={task.status} onChange={handleChange}>
              <option value="to-do">to-do</option>
              <option value="in-progress">in-progress</option>
              <option value="done">done</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>{taskToEdit ? 'Update' : 'Add'}</Button>
      </Modal.Footer>
    </Modal>
  );
}
