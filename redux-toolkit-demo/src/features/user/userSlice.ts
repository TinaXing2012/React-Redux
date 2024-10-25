import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending, state => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message || 'Whoops!';
            });
    }
});

export default userSlice.reducer;