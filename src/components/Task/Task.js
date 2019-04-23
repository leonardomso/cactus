import React from "react";
import { X } from "react-feather";

import { Styled, Text } from './Task.styles'

const Task = ({ text, index, deleteTask }) => (
    <Styled data-testid="task">
        <Text>{text}</Text>
        <X onClick={() => deleteTask(index)} />
    </Styled>
);

export default Task;
