import ReactDOM from 'react-dom';
import React from 'react';
import Main from './main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

let store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)
