import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { order, restock } from "./chickenSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function Chicken() {
    const [quantity, setQuantity] = useState(0);
    // const { numOfChicken } = useSelector((state: RootState) => state.chicken);
    // const dispatch = useDispatch<AppDispatch>();

    const {numOfChicken} = useAppSelector(state => state.chicken);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>Num of Chicken: {numOfChicken}</h1>
            <button onClick={() => dispatch(order())}>Order</button>
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
            <button onClick={() => dispatch(restock(quantity))}>Restock</button>
        </>
    )
}