import React, { useState } from "react";

import StyledAddTask from "../utils/components/AddTask/AddTask";
import Title from "../utils/components/AddTask/Title/Title";
import SubTitle from "../utils/components/AddTask/SubTitle/SubTitle";
import Paragraph from "../utils/components/AddTask/Paragraph/Paragraph";

import Form from "../utils/components/UI/Form/Form";
import Input from "../utils/components/UI/Input/Input";
import Button from "../utils/components/UI/Button/Button";

const AddTask = ({ addTask }) => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!text) return;
        addTask(text);
        setText("");
    };

    return (
        <StyledAddTask>
            <Title>
                <span role="img" aria-label="cactus">
                    🌵
                </span>{" "}
                Cactus
            </Title>
            <SubTitle>
                There are 0 tasks on board
            </SubTitle>
            <Paragraph>
                Type task text and click on card to move to another list.
            </Paragraph>

            <Form onSubmit={handleSubmit}>
                <Input
                    width="75%"
                    type="text"
                    placeholder="New task..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                    autoFocus
                />
                <Button width="20%">Add</Button>
            </Form>
        </StyledAddTask>
    );
};

export default AddTask;
