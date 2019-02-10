import React from "react";
import { connect } from "react-redux";

import StyledTasks from "../utils/components/Tasks/Tasks";

import Task from "./Task";

const Tasks = ({ tasks }) => (
    <StyledTasks>
        {tasks.allTasks.map((task, index) => (
            <Task key={index} text={task.text} />
        ))}
    </StyledTasks>
);

export default connect()(Tasks);
