import { applyMiddleware, createStore } from "redux";
import reducer from "./user-reducer";
import { thunk } from "redux-thunk";

// @ts-ignore
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
