import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return { tasks, addTask, deleteTask }
};

export default useTasks;