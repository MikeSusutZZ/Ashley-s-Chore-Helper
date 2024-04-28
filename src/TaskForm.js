// TaskForm.js
import React from 'react';
import Input from './Input';
import Button from './Button';

const TaskForm = ({ taskName, setTaskName, weight, setWeight, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <Input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight"
        min="1"
      />
      <Button type="submit">Enter</Button>
    </form>
  );
};

export default TaskForm
