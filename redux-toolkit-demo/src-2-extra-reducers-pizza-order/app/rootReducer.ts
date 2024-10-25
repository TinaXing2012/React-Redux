import { combineReducers } from "@reduxjs/toolkit";
import pizzaReducer from '../features/pizza/pizzaSlice';
import chickenReducer from '../features/chicken/chickenSlice';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    chicken: chickenReducer
});

export default rootReducer;