import * as types from "../constants";

export const addTaskRequest = () => ({
    type: types.ADD_TASK_REQUEST
});

export const addTaskSuccess = text => ({
    type: types.ADD_TASK_SUCCESS,
    text
});

export const addTaskError = (error) => ({
    type: types.ADD_TASK_ERROR,
    error
});

export const deleteTaskRequest = () => ({
    type: types.DELETE_TASK_REQUEST
});

export const deleteTaskSuccess = id => ({
    type: types.DELETE_TASK_SUCCESS,
    id
});

export const deleteTaskError = (error) => ({
    type: types.DELETE_TASK_ERROR,
    error
});

export const addTask = ({ text, error }) => dispatch => {
    dispatch(addTaskRequest());

    try {
        dispatch(addTaskSuccess(text));
    }
    catch (err) {
        dispatch(addTaskError(error));
    }
}

export const deleteTask = ({ id, error }) => dispatch => {
    dispatch(deleteTaskRequest());

    try {
        dispatch(deleteTaskSuccess(id));
    }
    catch (err) {
        dispatch(deleteTaskError(error));
    }
}
