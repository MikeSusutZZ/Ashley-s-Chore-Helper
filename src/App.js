import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';
import TaskForm from './TaskForm';
import TaskTable from './TaskTable';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [weight, setWeight] = useState(1);
  const [rolledTask, setRolledTask] = useState(null);

  useEffect(() => {
    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (loadedTasks) {
      setTasks(loadedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: taskName, weight: parseInt(weight, 10), completed: false }]);
    setTaskName('');
    setWeight(1);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleRoll = () => {
    const activeTasks = tasks.filter(task => !task.completed);
    if (activeTasks.length === 0) {
      setRolledTask(null);
      return; // Early return if no active tasks are available to roll
    }
    const totalWeight = activeTasks.reduce((sum, task) => sum + task.weight, 0);
    let random = Math.random() * totalWeight;
    for (const task of activeTasks) {
      random -= task.weight;
      if (random <= 0) {
        setRolledTask(task);
        return;
      }
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chore Dice</h1>
        <Button onClick={() => setTasks([])}>Clear</Button>
      </header>
      <TaskForm
        taskName={taskName}
        setTaskName={setTaskName}
        weight={weight}
        setWeight={setWeight}
        handleSubmit={handleAddTask}
      />
      <TaskTable tasks={tasks} onToggleComplete={handleToggleComplete} />
      <Button onClick={handleRoll}>Roll</Button>
        {rolledTask && (
          <>
            <p className="result">Rolled Task: {rolledTask.name}</p>
            <Button onClick={() => handleToggleComplete(rolledTask.id)}>Complete</Button>
          </>
        )}
    </div>
  );
}

export default App;
