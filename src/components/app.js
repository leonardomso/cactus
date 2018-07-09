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

export default connect()(App);
