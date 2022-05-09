import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../containers/login/Login';
import Profile from '../containers/profile/Profile';
import { useSelector } from "react-redux";
import Home from "../containers/home/Home";

const Router = () => {

    const token = useSelector(state => state.token.token);
    console.log('router : ',token)
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route
                path='/profile'
                element={
                    <PrivateRoute isAuthenticated={ token }>
                        <Profile />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default Router;