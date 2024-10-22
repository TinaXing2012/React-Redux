import store from './store';
import { createOrderPizzaAction, createRestockPizzaAction } from './pizza-action';
import { createOrderChickenAction, createRestockChickenAction } from './chicken-action';


// 4. test - get state, dispatch actions
console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated state: ', store.getState());
});

store.dispatch(createOrderPizzaAction());
store.dispatch(createRestockPizzaAction(2));

store.dispatch(createOrderChickenAction());
store.dispatch(createRestockChickenAction(7));
store.dispatch(createOrderChickenAction());

unsubscribe();


