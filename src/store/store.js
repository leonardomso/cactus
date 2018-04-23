import { createStore, combineReducers } from 'redux';
import TaskReducer from '../reducers/Task/TaskReducer';

// Create the store and import the reducers from 'reducers' folder for here.
// Here is where all the reducers will be.

const rootReducer = combineReducers({
    task: TaskReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
