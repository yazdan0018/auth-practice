import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import rootReducer from './rootReducer';
import { token, tokenAdd } from "./moudule/token";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'token'
};

let persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
//     middleware: getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// });
//
// export const persistor = persistStore(store);
// export default store;
export const storeCreator = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer:persistedReducer,
        middleware: [sagaMiddleware],
    });
    store.rootTask = sagaMiddleware.run(sagas);
    const persistor = persistStore(store);
    return {
        store: store,
        persistor: persistor
    };
};

export default storeCreator;