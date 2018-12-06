import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteTask } from "../actions";
import Task from './Task';

const StyledTasks = styled.ul`
    width: 100%;
    height: 100%;
    max-width: 500px;
    min-width: 250px;
    background-color: white;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 3px;
`;

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
