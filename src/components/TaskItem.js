import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

export default function TaskItem({ task, onEdit, onDelete }) {
  const priColor = 
    task.priority === 'high' ? 'danger' :
    task.priority === 'medium' ? 'warning' : 'secondary';

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>
          {task.title}{' '}
          <Badge bg={priColor}>{task.priority}</Badge>
        </Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Card.Text><strong>Status:</strong> {task.status}</Card.Text>
        <Button size="sm" variant="info" className="me-2" onClick={() => onEdit(task)}>Edit</Button>
        <Button size="sm" variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}
