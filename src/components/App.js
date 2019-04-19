import React, { useState } from "react";

import Container from '../utils/components/Container/Container'

import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

const App = () => {
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

    return (
        <Container>
            <AddTask addTask={addTask} tasks={tasks.length} />
            <Tasks tasks={tasks} deleteTask={deleteTask} />
        </Container>
    );
};

export default App;
