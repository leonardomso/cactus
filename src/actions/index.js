import * as constants from '../constants/';
import uuid from 'uuid';

export const addTask = (text) => ({
    type: constants.ADD_TASK,
    task: {
        id: uuid(),
        text,
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
