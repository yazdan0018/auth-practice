import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthenticatedRoute from './PrivateRoute';
import Login from '../containers/login/Login';
import Profile from '../containers/profile/Profile';
import { useSelector } from 'react-redux';
import Home from '../containers/home/Home';
import UnAuthenticatedRoute from './UnAuthenticatedRoute';

const Router = () => {

    const token = useSelector(state => state.token.token);

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route
                path='/profile'
                element={
                    <AuthenticatedRoute isAuthenticated={token}>
                        <Profile/>
                    </AuthenticatedRoute>
                }
            />
            <Route path='/login'
                   element={
                       <UnAuthenticatedRoute isAuthenticated={token}>
                           <Login/>
                       </UnAuthenticatedRoute>
                   }/>
        </Routes>
    );
};

export default Router;