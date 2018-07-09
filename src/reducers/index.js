import { combineReducers } from "redux";
import TasksReducer from "./TasksReducer";

const rootReducer = combineReducers({
    tasks: TasksReducer
});

export default rootReducer;
