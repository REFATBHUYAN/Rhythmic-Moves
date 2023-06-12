import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useRoles from '../Hooks/useRoles';
import { Navigate, useLocation } from 'react-router-dom';

const StudentRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [roles, isRolesLoading] = useRoles();
    const location = useLocation();

    if(loading || isRolesLoading || roles !== 'Student' ){
        return <progress className="progress w-56"></progress>
    }

    if (user && roles === 'Student') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;