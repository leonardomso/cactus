import React from "react";
import { X } from "react-feather";

import StyledTask from "../utils/components/Task/Task";
import Text from "../utils/components/Task/Text/Text";

const Task = ({ text, index, deleteTask }) => (
    <StyledTask>
        <Text>{text}</Text>
        <X onClick={() => deleteTask(index)} />
    </StyledTask>
);

export default Task;
