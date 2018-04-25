import * as constants from '../constants/';

export const addTask = (task) => ({
    type: constants.ADD_TASK,
    task: {
        id: uuid(),
        text: action.text,
        completed: false
    }
});

export const deleteTask = (task) => ({
    type: constants.DELETE_TASK,
    task
});

export const doneTask = (task) => ({
    type: constants.DONE_TASK,
    task
});
