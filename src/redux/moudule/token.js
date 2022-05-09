import { createSlice } from "@reduxjs/toolkit";

const initialState = { token : null }

export const tokenSlice = createSlice({
    name: 'token',
    initialState:{token : null},
    reducers: {
        tokenAdd: (state, action) => ({ token : action.payload}),
        tokenRemove: (state, action) => (initialState)
    },
});

export const { token, tokenAdd, tokenRemove } = tokenSlice.actions;

export default tokenSlice.reducer;