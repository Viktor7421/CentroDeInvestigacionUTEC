import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Table } from 'semantic-ui-react'

const GET_FORMS_URL = 'http://127.0.0.1:5000/forms';

function Content () {
  const firstRender = useRef(true);
  const [fomrs, setForms] = useState([]);

  useEffect(() => {
    if (firstRender.current) {
        firstRender.current = false;
        return;
    }
    getForms();
}, []);

  const getForms = async (e) => {
    try {
        const response = await axios.get(GET_FORMS_URL,
            {
            });  
          console.log('yes');
          setForms(response.data);
    } catch(err) {
        console.log('error');
    }
}

  return (
    <div>
      <h1>Content</h1>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Titulo de Proyecto</Table.HeaderCell>
            <Table.HeaderCell>Tipo de Proyecto</Table.HeaderCell>
            <Table.HeaderCell>Investigador Principal</Table.HeaderCell>
            <Table.HeaderCell>Tipo de participación</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            fomrs.length ? fomrs.map((item) => {
                        console.log(item)
                        return (
                          <Table.Row>
                            <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
                            <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
                            <Table.Cell>{item.Investigador_Principal}</Table.Cell>
                            <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
                          </Table.Row>
                        )
                    })
                : <> 
                    <h1>Loading fomrs</h1>
                </>
            }
        </Table.Body>
      </Table>
    </div>
  );
};

export default Content;
