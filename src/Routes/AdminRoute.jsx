import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from '../Hooks/useAdmin';
import { authContext } from '../UserContext/UserContext';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <div></div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/signIn' state={{ from: location }} replace />
};

export default AdminRoute;