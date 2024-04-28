import React from 'react';
import Button from './Button';

const TaskTable = ({ tasks, onToggleComplete }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Weight</th>
          <th>Actions</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.weight}</td>
            <td>
              <Button onClick={() => onToggleComplete(task.id)} className="remove-btn">
                {task.completed ? 'Unmark' : 'Complete'}
              </Button>
            </td>
            <td>{task.completed ? '✓' : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
