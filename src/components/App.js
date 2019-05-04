import React from "react";

import Container from '../utils/components/Container/Container'

import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

import useTasks from '../hooks/useTasks';

const App = () => {
    const { tasks, addTask, deleteTask } = useTasks();

    return (
        <Container>
            <AddTask addTask={addTask} tasks={tasks.length} />
            <Tasks tasks={tasks} deleteTask={deleteTask} />
        </Container>
    );
};

export default App;
