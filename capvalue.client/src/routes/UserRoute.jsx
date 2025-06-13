// src/routes/UserRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('role');

    return isAuthenticated && role === 'user' ? children : <Navigate to="/login" />;
};

export default UserRoute;
