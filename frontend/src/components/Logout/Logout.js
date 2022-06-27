import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const clientId = "540283367101-adurt52vr2dugihk25oh12dihiv9k2ju.apps.googleusercontent.com";

function Logout() {
    let navigate = useNavigate();

    const onSuccess = () => {
        console.log("Log out successfull!");
        return navigate('/');
    }

    return (
        <div id='signOutButton'>
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;