import { createStore, isAction } from "redux";

// 1. action

const PIZZA_ORDER = 'PIZZA_ORDER';

const createOrderPizzaAction = () => ({
    type: PIZZA_ORDER
});

// 2. create reducer
const initialState = {
    numOfPizza: 10
}

type ActionType = {
    type: string;
}

const reducer = (state = initialState, action:ActionType) => {
    switch(action.type){
        case PIZZA_ORDER:
            return {...state, numOfPizza: state.numOfPizza-1};
        default:
            return state;
    }
}
// 3. create a store
const store = createStore(reducer);

// 4. test - get state, dispatch actions
console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated state: ', store.getState());
});

store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());
unsubscribe();


