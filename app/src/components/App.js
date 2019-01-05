import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AddTask from './AddTask';
import Tasks from './Tasks';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 15px;
    background: white;

    svg {
        margin-right: 20px;
        width: 24px;
        height: 24px;
        color: #005ede;
    };
`;

const App = () => (
    <Container>
        <AddTask />
        <Tasks />
    </Container>
);

export default connect()(App);
