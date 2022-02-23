import { createStore, combineReducers } from "redux";
import reducer from "./reducer.ts";
const store = createStore(combineReducers({ todoList: reducer }));
export default store;
