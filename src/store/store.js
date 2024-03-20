import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const reducer = combineReducers({c:counterReducer})

const store = new createStore(reducer)

export default store;