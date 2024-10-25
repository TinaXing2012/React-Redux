import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from 'redux-logger';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

// {pizza: { numOfPizza: 10 }, chicken: {numOfChicken: 20}}

export default store;