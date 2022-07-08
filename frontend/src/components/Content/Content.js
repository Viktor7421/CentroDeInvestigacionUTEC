import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Table, Menu, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';

const GET_FORMS_URL = 'http://127.0.0.1:5000/forms';

function Content () {
  let navigate = useNavigate();
  const firstRender = useRef(true);
  const [forms, setForms] = useState([]);

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

  const getEstado = (status) => {
    if (status == 0) return "Pendiente"
    if (status == 1) return "Aprovado"
    if (status == 2) return "Rechazado"
  }

  const handleClick = (fid) => {
    return navigate(`/home/form/${fid}`);
  }

  return (
    <div>
      <h1>Content</h1>
      <Table striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Titulo de Proyecto</Table.HeaderCell>
            <Table.HeaderCell>Tipo de Proyecto</Table.HeaderCell>
            <Table.HeaderCell>Investigador Principal</Table.HeaderCell>
            <Table.HeaderCell>Tipo de participación</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            forms.length ? forms.map((item) => {
                        console.log(item)
                        return (
                          <Table.Row onClick={() => { handleClick(item.ID); }}>
                              <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
                              <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
                              <Table.Cell>{item.Investigador_Principal}</Table.Cell>
                              <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
                              <Table.Cell warning>{ getEstado(item.Estado_financiamiento) }</Table.Cell>
                          </Table.Row>
                        )
                    })
                : 
                <> 
                  <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                  </Dimmer>
                </>
            }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default Content;
