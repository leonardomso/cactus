import * as types from "../constants";

export const addTask = text => ({
    type: types.ADD_TASK,
    text
});

export const deleteTask = id => ({
    type: types.DELETE_TASK,
    id
});

export const completeTask = id => ({
    type: types.COMPLETE_TASK,
    id
});
