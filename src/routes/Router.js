import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../containers/login/Login';
import Profile from '../containers/profile/Profile';

const Router = () => {

    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route
                path='/profile'
                element={
                    <PrivateRoute isAuthenticated={false}>
                        <Profile />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default Router;