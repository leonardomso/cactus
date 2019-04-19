import React from "react";

import { Styled } from "./Tasks.styles";

import Task from "../Task/Task";

const Tasks = ({ tasks, deleteTask }) => (
    <Styled>
        {tasks.map((task, index) => (
            <Task
                key={index}
                index={index}
                deleteTask={deleteTask}
                text={task.text}
            />
        ))}
    </Styled>
);

export default Tasks;
