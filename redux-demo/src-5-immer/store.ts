import { combineReducers, createStore, isAction } from "redux";
import pizzaReducer from './pizza-reducer';
import chickenReducer from './chicken-reducer';
import userReducer from './user-reducer';

const combinedReducers = combineReducers({
    pizza: pizzaReducer,
    chicken: chickenReducer,
    user: userReducer
})

const store = createStore(combinedReducers);

export default store;