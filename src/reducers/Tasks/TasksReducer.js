import * as constants from '../../constants/';
import uuid from 'uuid';

const initialState = {
	tasks: []
};

const TaskReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.ADD_TASK:
			return { ...state,	tasks: [...state.tasks, action.task] };
		case constants.DONE_TASK:
			return state.map(task => task.id !== action.id);
		case constants.DELETE_TASK:
			return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
		default:
			return state;
	}
};

export default TaskReducer;
