import React, { Component } from 'react';
import TodoTasks from './TodoTasks';
import DoingTasks from './DoingTasks';
import DoneTasks from './DoneTasks';

class Tasks extends Component {
    render() {
        return (
            <div className="tasks">
                <TodoTasks />
                <DoingTasks />
                <DoneTasks />
            </div>
        );
    }
}

export default Tasks;
