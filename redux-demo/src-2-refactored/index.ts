import store from './store';
import { createOrderPizzaAction } from './pizza-action';


// 4. test - get state, dispatch actions
console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated state: ', store.getState());
});

store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());

unsubscribe();


