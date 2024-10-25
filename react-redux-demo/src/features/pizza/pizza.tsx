import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { order, restock } from "./pizzaSlice";

export default function Pizza(){

    // const pizzaState = useSelector((state: RootState) => state.pizza);
    const pizzaState = useAppSelector(state => state.pizza);
    // const dispatch = useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>Num of Pizza: {pizzaState.numOfPizza}</h1>
            <button onClick={() => dispatch(order())}>Order</button>
            <button onClick={() => dispatch(restock(5))}>Restock</button>
        </>
    )
}