import React, { Component } from "react";
import { connect } from "react-redux";

import AddTask from "./AddTask";
import Tasks from "./Tasks";

const App = props => (
    <div className="app">
        <AddTask />
        <Tasks />
    </div>
);

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(mapStateToProps)(App);
