import store from './store';
import { createOrderPizzaAction, createRestockPizzaAction } from './pizza-action';
import { createOrderChickenAction, createRestockChickenAction } from './chicken-action';
import { createUpdateStreetAction } from './user-action';


// console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    // console.log('updated state: ', store.getState());
});

store.dispatch(createUpdateStreetAction('999 1st St'));

unsubscribe();


