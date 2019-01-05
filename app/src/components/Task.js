import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { X } from 'react-feather';

import StyledTask from '../utils/components/Task/Task'
import Text from '../utils/components/Task/Text/Text'

import { deleteTask } from "../actions";

class Task extends Component {
    render() {
        const { text, id } = this.props;

        return (
            <StyledTask>
                <Text>{text}</Text>                
                <X onClick={() => this.props.deleteTask(id)} />
            </StyledTask>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ deleteTask }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Task);
