import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { Grid } from 'semantic-ui-react'
import { gapi } from 'gapi-script';

import './Login.scss';

const clientId = "540283367101-adurt52vr2dugihk25oh12dihiv9k2ju.apps.googleusercontent.com";

function Login() {
  let navigate = useNavigate();

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    };

    gapi.load('client:auth2', start);
  });
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if(success) {
      return navigate('/home');
    }
  }, [success]);

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user:", res);
    setSuccess(true);
  }

  
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
  }

  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <GoogleLogin 
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </Grid.Column>
    </Grid>
  );
}
export default Login;