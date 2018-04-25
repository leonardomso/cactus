import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const Tasks = props => {
	console.log(props);

	return (
		<div className="tasks">
			<div className="task todo__tasks">
				<h1 className="tasks__title">Todo Tasks</h1>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		tasks: state.tasks
	};
};

export default connect(mapStateToProps)(Tasks);
