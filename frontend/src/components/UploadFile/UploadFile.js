import React, { useRef, useState } from "react";
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
import { Form, Message } from 'semantic-ui-react'
import axios from 'axios';

const FILE_URL = 'http://127.0.0.1:5000/add/file/1';

export default function UploadFile() {
  const [message, setMessage] = useState('');
  const [ufile, setUfile] = useState();
  const fileRef = useRef();

  const handleChange = (e) => {
    const [file] = e.target.files;
    setUfile(file);
    console.log(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(FILE_URL, ufile,
          {
              headers : {
                  'Content-Type': 'application/json',
              }
          });
      console.log("YES");
      console.log(response);
      setMessage(<Message
          success
          header='Encuesta Enviada'
          content="La encuesta esta a la espera de ser revisada."
      />);
  } catch(err){
      console.log("ERROR");
      console.log(err.response);
      setMessage(<Message
          error
          header='ERROR'
          content="Hubo un ERROR al enviar la encuesta."
      />);
  }
  }

  return (
    <Form onSubmit={ handleSubmit } success error>
      {message}
      <Segment placeholder>
          <Header icon>
              <Icon name='pdf file outline' />
              <span id="file-chosen">{ufile ? ufile.name :  <p>Por favor envíe su propuesta en formato PDF</p>}</span>
          </Header>
          <Button onClick={() => fileRef.current.click()} primary>
              Añadir Documento
          </Button>
          <input
              required = {true}
              ref={fileRef}
              onChange={handleChange}
              multiple={false}
              type="file"
              accept=".pdf"
              hidden
          />
      </Segment>
      <Form.Button primary>Submit</Form.Button>
    </Form>
  );
}