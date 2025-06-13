import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AdminDashboard from './views/dashboard/Adminindex.jsx';
import UserDashboard from './views/dashboard/index.jsx';
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />

            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                }
            />
            <Route
                path="/user"
                element={
                    <UserRoute>
                        <UserDashboard />
                    </UserRoute>
                }
            />

            {/* Rediriger la racine vers le bon dashboard selon le rôle */}
            <Route
                path="/"
                element={
                    (() => {
                        const role = localStorage.getItem('role');
                        if (role === 'admin') return <Navigate to="/admin" />;
                        if (role === 'user') return <Navigate to="/user" />;
                        return <Navigate to="/login" />;
                    })()
                }
            />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
