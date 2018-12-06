import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers";

const middleware = applyMiddleware(logger);

const store = createStore(
    rootReducer,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
