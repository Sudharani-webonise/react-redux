import ReactDOM from 'react-dom';
import React from 'react';
import Main from './main';
import { createStore , applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

let store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory), createLogger())))
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)
