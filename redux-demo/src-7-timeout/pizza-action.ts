import { Dispatch } from "redux";
import { PIZZA_ORDER, PIZZA_RESTOCK } from "./constants";

export const createOrderPizzaAction = () => ({
    type: PIZZA_ORDER
});

export const createRestockPizzaAction = (quantity: number) => ({
    type: PIZZA_RESTOCK,
    payload: quantity
});

export const createOrderPizzaAsyncAction = (delay: number) => (dispatch: Dispatch) => {
    setTimeout(() => {
        dispatch(createOrderPizzaAction());
    }, delay);
};
