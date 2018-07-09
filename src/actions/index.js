import * as constants from "../constants/";
import uuid from "uuid";

export const addTask = text => ({
    type: constants.ADD_TASK,
    task: {
        id: uuid(),
        text,
        completed: false
    }
});

export const deleteTask = id => ({
    type: constants.DELETE_TASK,
    id
});

export const doneTask = id => ({
    type: constants.DONE_TASK,
    id
});
