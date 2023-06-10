import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useRoles from '../Hooks/useRoles';

const AdminRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const [roles, isRolesLoading] = useRoles();
    const location = useLocation();

    if(loading || isRolesLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && roles === 'Admin') {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;