import { createSlice } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects';

const initialState = {
    loading: false,
    loaded: false,
    data: null,
    error: null
};

export const userSlice = createSlice({
    name: 'loadUser',
    initialState,
    reducers: {
        loadUser: (state, action) => ({ ...initialState, loading: true }),
        loadUserSuccess: (state, action) => ([{ ...initialState, loading: false, loaded: true, data: action.payload }]),
        loadUserFailure: (state, action) => ({ ...initialState, loading: false, loaded: true, error: action.payload }),
    },
});

const { loadUser, loadUserSuccess, loadUserFailure } = userSlice.actions;

export function* watchUser() {
    try {
        const response = yield fetch('https://reqres.in/api/users?page=2', {
            method: 'GET'
        });
        const jsonResponse = yield response.json();
        // console.log(jsonResponse)
        yield put(loadUserSuccess(jsonResponse));
    } catch (e) {
        yield put(loadUserFailure(e.toString()));
    }
}

export { loadUser };
export default userSlice.reducer;