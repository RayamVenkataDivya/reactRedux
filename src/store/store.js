import {combineReducers,createStore} from 'redux';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducer';

var reducer=combineReducers({c:counterReducer,t:todoReducer})
const store = new createStore(reducer)

export default store;