import ReactDOM from 'react-dom';
import React from 'react';
import { createStore , applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Router, browserHistory } from 'react-router';
import ROUTES from'./router';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import rootReducer from './reducers';
import {routeLocationDidUpdate} from './actions/location';

let store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory), createLogger())));
const history = syncHistoryWithStore(browserHistory, store)
history.listen(location => store.dispatch(routeLocationDidUpdate(location)))
ReactDOM.render(
    <Provider store={store}>
          <Router history={history} routes={ROUTES} />
    </Provider>,
    document.getElementById('root')
)
