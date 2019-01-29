import React from 'react';
import { connect } from 'react-redux';
import { X } from 'react-feather';

import StyledTask from '../utils/components/Task/Task'
import Text from '../utils/components/Task/Text/Text'

const Task = ({ text }) => (
    <StyledTask>
        <Text>{text}</Text>                
        <X onClick={() => console.log('clicked')} />
    </StyledTask>
)

const mapStateToProps = ({ tasks }) => ({
    tasks
});

export default connect(mapStateToProps, null)(Task);
