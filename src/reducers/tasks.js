import * as types from '../constants';

const initialState = [
    {
        id: 0,
        text: 'Made with React & Redux only.',
        completed: false
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
    case types.ADD_TASK:
        return [
            ...state,
            {
                id: state.length,
                completed: false,
                text: action.text
            }
        ];
    case types.DELETE_TASK:
        return state.filter(task => task.id !== action.id);
    case types.COMPLETE_TASK:
        return state.map(
            task =>
                task.id === action.id
                    ? {
                        ...task,
                        completed: !task.completed
                    }
                    : task
        );
    default:
        return state;
    }
};
