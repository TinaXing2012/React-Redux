import store from './app/store';
import * as pizzaActions from './features/pizza/pizzaSlice';
import * as chickenActions from './features/chicken/chickenSlice';

// console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    // console.log('updated state: ', store.getState());
});

store.dispatch(pizzaActions.order());
store.dispatch(pizzaActions.order());
store.dispatch(pizzaActions.restock(5));

store.dispatch(chickenActions.order());
store.dispatch(chickenActions.restock(3));

store.dispatch

unsubscribe();