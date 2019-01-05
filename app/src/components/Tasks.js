import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StyledTasks from '../utils/components/Tasks/Tasks'

import { deleteTask } from "../actions";

import Task from './Task';


class Tasks extends Component {
    render() {
        const { tasks } = this.props;

        return (
            <StyledTasks>
                {tasks.map(task => (
                    <Task key={task.id} text={task.text} id={task.id} />
                ))}
            </StyledTasks>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ deleteTask }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);
