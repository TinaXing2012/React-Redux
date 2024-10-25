import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as pizzaActions from "../pizza/pizzaSlice";

const initialState = {
    numOfChicken: 20
}

const chickenSlice = createSlice({
    name: 'chicken',
    initialState,
    reducers: {
        order(state) {
            state.numOfChicken--;
        },
        restock(state, action: PayloadAction<number>) {
            state.numOfChicken += action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(pizzaActions.order, (state) => {
            state.numOfChicken--;
        });
    }
});

export default chickenSlice.reducer;
export const { order, restock } = chickenSlice.actions;