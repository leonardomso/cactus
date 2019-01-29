import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StyledAddTask from '../utils/components/AddTask/AddTask'
import Title from '../utils/components/AddTask/Title/Title'
import SubTitle from '../utils/components/AddTask/SubTitle/SubTitle'
import Paragraph from '../utils/components/AddTask/Paragraph/Paragraph'

import Form from '../utils/components/UI/Form/Form';
import Input from '../utils/components/UI/Input/Input';
import Button from '../utils/components/UI/Button/Button';

import { addTask } from '../actions/';

const AddTask = ({ addTask }) => {
    const [text, setText] = useState("");

    const onChange = e => {
        setText(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        addTask(text);
        setText("");
    };

    return (
        <StyledAddTask>
            <Title><span role="img" aria-label="cactus">🌵</span> Cactus</Title>
            <SubTitle>There are 0 tasks on board</SubTitle>
            <Paragraph>
                Type task text and click on card to move to another list.
            </Paragraph>

            <Form onSubmit={onSubmit}>
                <Input
                    width="75%"
                    type="text"
                    placeholder="New task..."
                    value={text}
                    onChange={onChange}
                    autoFocus
                />
                <Button width="20%" onClick={() => console.log(text)}>
                    Add
                </Button>
            </Form>
        </StyledAddTask>
      );
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addTask }, dispatch)
};

export default connect(null, mapDispatchToProps)(AddTask);
