import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './moudule/login';
import userReducer from './moudule/user';
import tokenReducer from './moudule/token';

const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer,
    token: tokenReducer
});

export default rootReducer;