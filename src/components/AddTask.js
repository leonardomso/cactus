import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/';

class AddTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.addTask(this.state.text);
		this.setState({ text: '' });
	};

	onInputChange = e => {
		this.setState({
			text: e.target.value
		});
	};

	render() {
		return (
			<div className="add__task">
				<h1 className="trololo__title">Trololo Board</h1>
				<h3 className="trololo__subtitle">
					There are 6 tasks on board
				</h3>
				<p className="trololo__explanation">
					Type task text and click on card to move to another list.
				</p>

				<form onSubmit={this.onSubmit}>
					<input
						value={this.state.value}
						onChange={this.onInputChange}
						type="text"
						name="task"
						placeholder="New task..."
						autoFocus
					/>

					<button onClick={this.onSubmit}>Add</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddTask);
