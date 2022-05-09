import { createSlice } from "@reduxjs/toolkit";

const initialState = { token : null }

export const tokenSlice = createSlice({
    name: 'token',
    initialState:'',
    reducers: {
        token: (state, action) => ({ ...initialState }),
        tokenAdd: (state, action) => ({ token : action.payload}),
        tokenRemove: (state, action) => ({ token : false })
    },
});

export const { token, tokenAdd, tokenRemove } = tokenSlice.actions;

export default tokenSlice.reducer;