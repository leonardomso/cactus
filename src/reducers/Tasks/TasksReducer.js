import * as constants from '../../constants/';
import uuid from 'uuid';

const initialState = {
    tasks: [
        {
            id: uuid(),
            text: 'The first one',
            completed: false
        }
    ]
}

const TaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TASK:
            return [ ...state, { tasks: action.task } ];
        case constants.REMOVE_TASK:
            return
        case constants.DONE_TASK:
            return
        default:
            return state;
    }
}

export default TaskReducer;
