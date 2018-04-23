import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoTasks extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.map(item => {
                        <li>{item}</li>
                    });
                }
            </ul>
        );
    }
}

export default TodoTasks;
