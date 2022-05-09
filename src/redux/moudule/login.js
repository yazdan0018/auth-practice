import { createSlice } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects';
import { tokenAdd } from "./token";
import { useSelector } from "react-redux";

const initialState = {
    loading: false,
    loaded: false,
    data: null,
    error: null
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => ({ ...initialState, loading: true }),
        loginSuccess: (state, action) => ({ ...initialState, loading: false, loaded: true, data: action.payload }),
        loginFailure: (state, action) => ({ ...initialState, loading: false, loaded: true, error: action.payload }),
    },
});

const { login, loginSuccess, loginFailure } = loginSlice.actions;

export function* watchLogin(action) {
    try {
        const response = yield fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const jsonResponse = yield response.json();
        yield put(tokenAdd(jsonResponse.token));
        yield put(loginSuccess(jsonResponse));
    } catch (e) {
        yield put(loginFailure(e.toString()));
    }
}

export { login, loginSuccess };
export default loginSlice.reducer;