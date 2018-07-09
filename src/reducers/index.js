import { combineReducers } from "redux";
import TasksReducer from "./Tasks/TasksReducer";

const rootReducer = combineReducers({
    tasks: TasksReducer
});

export default rootReducer;
