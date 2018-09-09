import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteTask } from '../actions/';
import cross from '../utils/icons/cross.svg';

const StyledTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-radius: 3px;
    width: 90%;
    height: 70px;
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
        margin: 0 auto;
        color: #dd5e89;
        font-size: calc(12px + (14 - 12) * (100vw - 240px) / (700 - 240));
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`;

const Svg = styled.img`
    width: 12px;
    height: 12px;
    margin-right: 10px;
`;

class Task extends Component {
    render() {
        const { tasks, text, id } = this.props;

        return (
            <StyledTask>
                <p>{text}</p>
                <Svg
                    src={`${cross}`}
                    onClick={() => this.props.deleteTask(id)}
                />
            </StyledTask>
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
)(Task);
