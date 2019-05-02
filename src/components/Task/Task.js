import React from "react";
import { X } from "react-feather";

import { Styled, Text } from './Task.styles'

const Task = ({ text, index, deleteTask }) => (
    <Styled data-testid="task">
        <Text data-testid="task-text">{text}</Text>
        <X onClick={() => deleteTask(index)} data-testid="deleteButton" />
    </Styled>
);

export default Task;
