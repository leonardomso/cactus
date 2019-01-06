import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StyledAddTask from '../utils/components/AddTask/AddTask'
import Title from '../utils/components/AddTask/Title/Title'
import SubTitle from '../utils/components/AddTask/SubTitle/SubTitle'
import Paragraph from '../utils/components/AddTask/Paragraph/Paragraph'

import Form from '../utils/components/UI/Form/Form';
import Input from '../utils/components/UI/Input/Input';
import Button from '../utils/components/UI/Button/Button';

import { addTask } from '../actions';

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
        if (this.state.text !== '') {
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
                <Title>Cactus</Title>
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
