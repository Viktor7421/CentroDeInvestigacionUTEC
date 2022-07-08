import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from '../../context/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext);
}

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        window.localStorage.getItem('user-session')
            ? <Outlet />
            : <Navigate to='/' state={{from: location}} replace />
    )
}

export default RequireAuth;