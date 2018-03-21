import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>Hello Redux!</div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
