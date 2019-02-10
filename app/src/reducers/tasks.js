import * as types from "../constants";

const initialState = {
    loading: false,
    allTasks: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK_REQUEST:
            return { ...state, loading: true };
        case types.ADD_TASK_SUCCESS:
            return {
                allTasks: [...state.allTasks, { text: action.text }],
                loading: false
            };
        case types.ADD_TASK_ERROR:
            return [{ ...state, loading: false, error: action.error }];
        default:
            return state;
    }
};
