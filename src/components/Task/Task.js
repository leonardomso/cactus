import React from "react";
import { X } from "react-feather";

import { Styled, Text } from './Task.styles'

const Task = ({ text, index, deleteTask }) => (
    <Styled>
        <Text>{text}</Text>
        <X onClick={() => deleteTask(index)} />
    </Styled>
);

export default Task;
