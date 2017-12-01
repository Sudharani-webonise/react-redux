import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { pingPong } from './pingPong';

const rootReducer = combineReducers({
    pingPong,
    routing
})

export default rootReducer
