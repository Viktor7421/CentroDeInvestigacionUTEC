import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { BsPower } from 'react-icons/bs';

const clientId = "540283367101-adurt52vr2dugihk25oh12dihiv9k2ju.apps.googleusercontent.com";

function Logout() {
    let navigate = useNavigate();

    const onSuccess = () => {
        console.log("Log out successfull!");
        return navigate('/');
    }

    return (
        <GoogleLogout 
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            render={renderProps => (
                <a
                    href="#"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    <i class="fa fa-power-off fa-2x"><BsPower/></i>
                    <span class="nav-text">
                        Logout
                    </span>
                </a>
            )}
        />
    )
}

export default Logout;