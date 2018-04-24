import React, { Component } from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';

class App extends Component {
	render() {
		return (
			<div className="app">
				<AddTask />
				<Tasks />
			</div>
		);
	}
}

export default App;
