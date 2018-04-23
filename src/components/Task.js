import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Tasks: [
	{task : },
	{ task: }
];
*/
/* Task: {
	text: 
	taskInProgress: false
	taskDone: false
}
*/

class Task extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem: '',
			personItem: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			newItem: e.target.value,
			personItem: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>Trololo Board</h1>
				<h3>There are 6 tasks on board</h3>
				<p>
					Type task text and executor name. Click on card to move to
					another list.
				</p>

				<input
					value={this.state.newItem}
					onChangeHandler={this.handleChange}
					type="text"
					placeholder="New task..."
				/>

				<input
					value={this.state.personItem}
					onChangeHandler={this.handleChange}
					type="text"
					placeholder="Who..."
				/>

				<button
					onClick={() => {
						this.props.add(this.state.newItem);
						this.setState({ newItem: '' });
					}}
					type="onSubmit">
					Add
				</button>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		list: state.list
	};
}

function mapDispatchToProps(dispatch) {
	return {
		add: value => {
			dispatch({ type: 'ADD', payload: value });
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
