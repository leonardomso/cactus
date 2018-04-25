import React, { Component } from 'react';
import { connect } from 'react-redux';

class Task extends Component {
	constructor(props) {
		super(props);
	}

	deleteTask = id => {
		this.props.deleteTask(id);
	};

	render() {
		return (
			<div key={id} className="tasks__item">
				<p>{text}</p>
				<svg
					className="tasks__icon tasks__check"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512">
					<path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
				</svg>
				<svg
					className="tasks__icon tasks__cross"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 384 512">
					<path d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z" />
				</svg>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tasks
	};
};

export default connect(mapStateToProps)(Task);
