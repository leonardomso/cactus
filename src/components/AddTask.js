import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class AddTask extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="add__task">
				<h1 className="trololo__title">Trololo Board</h1>
				<h3 className="trololo__subtitle">
					There are 6 tasks on board
				</h3>
				<p className="trololo__explanation">
					Type task text and executor name. Click on card to move to
					another list.
				</p>

				<input type="text" placeholder="New task..." />

				<input type="text" placeholder="Who..." />

				<button type="onSubmit">Add</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
