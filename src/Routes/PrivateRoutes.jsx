import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loader} = use(AuthContext);
    const Location = useLocation();
    console.log(Location.pathname);

    if(loader){
        return <span className="loading loading-ring loading-xl"></span>

    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={Location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoutes;