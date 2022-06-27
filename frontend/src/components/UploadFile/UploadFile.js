import React, { useRef, useState } from "react";
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

export default function UploadFile() {
  const fileRef = useRef();

  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
  };

  return (
    <Segment placeholder>
        <Header icon>
            <Icon name='pdf file outline' />
            <span id="file-chosen">Por favor envíe su propuesta en formato PDF</span>
        </Header>
        <Button onClick={() => fileRef.current.click()} primary>
            Añadir Documento
        </Button>
        <input
            ref={fileRef}
            onChange={handleChange}
            multiple={false}
            type="file"
            accept=".pdf"
            hidden
        />
    </Segment>
  );
}