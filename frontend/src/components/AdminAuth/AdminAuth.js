import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from '../../context/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext);
}

const AdminAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        JSON.parse(window.localStorage.getItem('user-session')).Cargo === 'Profesor'
            ? <Outlet />
            : <Navigate to='/home' state={{from: location}} replace />
    )
}

export default AdminAuth;