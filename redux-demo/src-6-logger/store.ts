import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import pizzaReducer from './pizza-reducer';
import chickenReducer from './chicken-reducer';
import userReducer from './user-reducer';

const combinedReducers = combineReducers({
    pizza: pizzaReducer,
    chicken: chickenReducer,
    user: userReducer
});

// @ts-ignore
const store = createStore(combinedReducers, applyMiddleware(logger));

export default store;