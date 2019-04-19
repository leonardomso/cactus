import React, { useState } from "react";

import { Styled, Title, SubTitle, Paragraph } from './AddTask.styles';

import Form from "../../utils/components/UI/Form/Form";
import Input from "../../utils/components/UI/Input/Input";
import Button from "../../utils/components/UI/Button/Button";

const AddTask = ({ addTask, tasks }) => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!text) return;
        addTask(text);
        setText("");
    };

    return (
        <Styled>
            <Title>
                <span role="img" aria-label="cactus">
                    🌵
                </span>{" "}
                Cactus
            </Title>
            <SubTitle>
                There are {tasks} tasks on board
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
        </Styled>
    );
};

export default AddTask;
