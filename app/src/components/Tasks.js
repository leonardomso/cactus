import React from "react";

import StyledTasks from "../utils/components/Tasks/Tasks";

import Task from "./Task";

const Tasks = ({ tasks, deleteTask }) => (
    <StyledTasks>
        {tasks.map((task, index) => (
            <Task
                key={index}
                index={index}
                deleteTask={deleteTask}
                text={task.text}
            />
        ))}
    </StyledTasks>
);

export default Tasks;
