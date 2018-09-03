import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from '../utils/components/form/';
import Input from '../utils/components/input/';
import Button from '../utils/components/button/';
import { addTask } from '../actions/';

const StyledAddTask = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`;

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: white;
    font-size: calc(30px + (34 - 30) * (100vw - 240px) / (700 - 240));
`;

const SubTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: white;
    font-size: calc(16px + (18 - 16) * (100vw - 240px) / (700 - 240));
`;

const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: white;
    font-size: calc(12px + (14 - 12) * (100vw - 240px) / (700 - 240));
`;

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            tasks: 0
        };
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text != '') {
            this.props.addTask(this.state.text);
            this.setState({ text: '' });
        }
    };

    onInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        return (
            <StyledAddTask>
                <Title>Trololo Board</Title>
                <SubTitle>There are {this.state.tasks} tasks on board</SubTitle>
                <Paragraph>
                    Type task text and click on card to move to another list.
                </Paragraph>

                <Form onSubmit={this.onSubmit}>
                    <Input
                        width="75%"
                        value={this.state.text}
                        onChange={this.onInputChange}
                        type="text"
                        placeholder="New task..."
                        autoFocus
                    />
                    <Button width="20%" onClick={this.onSubmit}>
                        Add
                    </Button>
                </Form>
            </StyledAddTask>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addTask }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask);
