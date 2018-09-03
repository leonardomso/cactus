import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AddTask from './AddTask';
import Tasks from './Tasks';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #dd5e89;
    background: -webkit-linear-gradient(to bottom, #f7bb97, #dd5e89);
    background: linear-gradient(to bottom, #f7bb97, #dd5e89);
`;

const StyledApp = styled.div`
    width: 50%;
    height: 90%;
    min-width: 300px;
    max-width: 500px;
    display: grid;
    grid-template-rows: 200px 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
`;

const App = props => (
    <Container>
        <StyledApp>
            <AddTask />
            <Tasks />
        </StyledApp>
    </Container>
);

export default connect()(App);
