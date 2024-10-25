import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    numOfPizza: 10
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        order(state) {
            state.numOfPizza--;
        },
        restock: (state, action: PayloadAction<number>) => {
            state.numOfPizza += action.payload;
        }
    }
});

export default pizzaSlice.reducer;
export const { order, restock } = pizzaSlice.actions;