import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers/';
import logger from 'redux-logger'

const middleware = applyMiddleware(logger);

const store = createStore(
    rootReducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
