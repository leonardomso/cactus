import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledTasks = styled.main`
    width: 100%;
    height: 100%;
    background-color: white;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 3px;
`;

const TaskItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-radius: 3px;
    width: 90%;
    height: 70px;

    p {
        margin: 0 auto;
        color: #dd5e89;
        font-size: calc(12px + (14 - 12) * (100vw - 240px) / (700 - 240));
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`;

class Tasks extends Component {
    render() {
        return (
            <StyledTasks>
                {this.props.tasks.tasks.map(task => (
                    <TaskItem key={task.id}>
                        <p>{task.text}</p>
                    </TaskItem>
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

export default connect(mapStateToProps)(Tasks);
