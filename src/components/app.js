import React, { Component } from 'react';
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
    background: #dd5e89;
    background: -webkit-linear-gradient(to bottom, #f7bb97, #dd5e89);
    background: linear-gradient(to bottom, #f7bb97, #dd5e89);
`;

const App = () => (
    <Container>
        <AddTask />
        <Tasks />
    </Container>
);

export default connect()(App);
