import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';

function App({children}) {
    return (
        <AppContainer>
            {children}
        </AppContainer>
    );
}

export default App;
