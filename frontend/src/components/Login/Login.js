import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { Grid } from 'semantic-ui-react'
import { gapi } from 'gapi-script';

import './Login.scss';

const clientId = "540283367101-adurt52vr2dugihk25oh12dihiv9k2ju.apps.googleusercontent.com";
const AUTH_URL = 'http://qhapacnan.com:5000/users/auth';

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

  const onSuccess = async (res) => {
    let email = res.profileObj.email
    
    // if(email.substring((email.length-12), (email.length)) != "@utec.edu.pe") {
    //   return
    // }

    try {
      const response = await axios.post(AUTH_URL,
        JSON.stringify({
          GoogleId: res.googleId,
          Nombre: res.profileObj.name,
          Cargo: "Profesor", 
          Correo: res.profileObj.email
        }),
        {
            headers : {
                'Content-Type': 'application/json',
            }
        });
      console.log("YES");
      console.log(response);
      window.localStorage.setItem('user-session', JSON.stringify({...response.data}));
    } catch(err){
        console.log("ERROR");
        console.log(err.response);
    }
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