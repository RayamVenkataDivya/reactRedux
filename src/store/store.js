import {combineReducers,createStore} from 'redux';
import todoReducer from './reducers/todoReducer';

const reducer=combineReducers({t:todoReducer})
const store = new createStore(reducer)

export default store;

