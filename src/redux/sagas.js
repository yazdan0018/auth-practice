import { all, takeEvery } from 'redux-saga/effects';
import { login, watchLogin } from './moudule/login';
import { loadUser, watchUser } from './moudule/user';

export default function* root() {
    yield all([
        takeEvery(login, watchLogin),
        takeEvery(loadUser,watchUser)
    ]);
};