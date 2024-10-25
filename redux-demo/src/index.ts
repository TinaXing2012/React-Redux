
import store from "./store"
import { createFetchUserAsyncAction, createFetchUserFailureAction, createFetchUserRequestAction, createFetchUserSuccessAction } from "./user-action";


console.log('inital state: ', store.getState());

store.subscribe(() => {
    console.log('updated state: ', store.getState());
});

store.dispatch(createFetchUserAsyncAction());
