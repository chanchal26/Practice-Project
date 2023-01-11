import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { authContext } from '../UserContext/UserContext';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()

    if (loading) {
        return <div></div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/signIn' state={{ from: location }} replace />
};

export default PrivateRoutes;