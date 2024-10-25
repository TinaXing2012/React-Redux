import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    }
});

export default chickenSlice.reducer;
export const { order, restock } = chickenSlice.actions;