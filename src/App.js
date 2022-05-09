import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import Router from './routes/Router';
import storeCreator from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = storeCreator();

function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppContainer>
                    <Router/>
                </AppContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
