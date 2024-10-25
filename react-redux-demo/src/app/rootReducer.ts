import { combineReducers } from "@reduxjs/toolkit";
import pizzaReducer from '../features/pizza/pizzaSlice';
import chickenReducer from '../features/chicken/chickenSlice';
import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    chicken: chickenReducer,
    user: userReducer
});

// RootState = {pizza: {numOfPizza: 10}, chicken: {numOfChicken: 20}, user: {loading: false, users:[], error:''}}

export default rootReducer;