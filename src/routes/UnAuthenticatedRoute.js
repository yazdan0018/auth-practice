import React from 'react';
import { Navigate } from 'react-router-dom';


const UnAuthenticatedRoute = ({ isAuthenticated, children }) => {
    if (isAuthenticated) {
        return <Navigate to="/profile" replace />;
    }

    return children;
};

export default UnAuthenticatedRoute;