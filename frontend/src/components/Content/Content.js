import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Table, Menu, Icon, Dimmer, Loader, Input, Dropdown } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';

const GET_FORMS_URL = 'https://qhapacnan.com:5000/forms';
const GET_USER_FORMS_URL = 'https://qhapacnan.com:5000/forms/user/';

function Content () {
  let navigate = useNavigate();
  const firstRender = useRef(true);
  const [forms, setForms] = useState([]);

  const [searchTituloProyecto, setSearchTituloProyecto] = useState('');
  const [searchTipoProyecto, setSearchTipoProyecto] = useState('');
  const [searchInvestigador, setSearchInvestigador] = useState('');
  const [searchTipoParticipacion, setSearchTipoParticipacion] = useState('');
  const [searchEstado, setSearchEstado] = useState('');

  useEffect(() => {
    if (firstRender.current) {
        firstRender.current = false;
        return;
    }
    getForms();
  }, []);

  const getForms = async (e) => {
    let URL = GET_FORMS_URL;
    try {
        if(JSON.parse(window.localStorage.getItem('user-session')).Cargo != 'Administrador') URL = GET_USER_FORMS_URL+JSON.parse(window.localStorage.getItem('user-session')).ID;
        const response = await axios.get(URL,
            {
            });  
          console.log('yes');
          setForms(response.data);
    } catch(err) {
        console.log('error');
    }
  }

  const getEstado = (status) => {
    if (status == 0) return <Table.Cell warning> Pendiente </Table.Cell>
    if (status == 1) return <Table.Cell positive> Aprovado </Table.Cell>
    if (status == 2) return <Table.Cell negative> Rechazado </Table.Cell>
  }

  const handleClick = (fid) => {
    return navigate(`/home/form/${fid}`);
  }

  const switchSearch = () => {
    if (searchTituloProyecto != '') {
      return forms.filter((item) => {
          if (item.Titulo_de_Proyecto.toLowerCase().startsWith(searchTituloProyecto.toLowerCase())) {
            return item;
          }
        }).map((item) => {
          return (
            <Table.Row onClick={() => { handleClick(item.ID); }}>
              <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
              <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
              <Table.Cell>{item.Investigador_Principal}</Table.Cell>
              <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
              { getEstado(item.Estado_financiamiento) }
            </Table.Row>
          )
        }
      );
    } else if (searchTipoProyecto != '') {
      return forms.filter((item) => {
          if (item.Tipo_de_Proyecto.toLowerCase().startsWith(searchTipoProyecto.toLowerCase())) {
            return item;
          }
        }).map((item) => {
          return (
            <Table.Row onClick={() => { handleClick(item.ID); }}>
              <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
              <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
              <Table.Cell>{item.Investigador_Principal}</Table.Cell>
              <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
              { getEstado(item.Estado_financiamiento) }
            </Table.Row>
          )
        }
      );
    } else if (searchInvestigador != '') {
        return forms.filter((item) => {
          if (item.Investigador_Principal.toLowerCase().startsWith(searchInvestigador.toLowerCase())) {
            return item;
          }
        }).map((item) => {
          return (
            <Table.Row onClick={() => { handleClick(item.ID); }}>
              <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
              <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
              <Table.Cell>{item.Investigador_Principal}</Table.Cell>
              <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
              { getEstado(item.Estado_financiamiento) }
            </Table.Row>
          )
        }
      );
    } else if (searchTipoParticipacion != '') {
      return forms.filter((item) => {
        if (item.Tipo_de_participacion.toLowerCase().startsWith(searchTipoParticipacion.toLowerCase())) {
          return item;
        }
      }).map((item) => {
        return (
          <Table.Row onClick={() => { handleClick(item.ID); }}>
            <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
            <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
            <Table.Cell>{item.Investigador_Principal}</Table.Cell>
            <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
            { getEstado(item.Estado_financiamiento) }
          </Table.Row>
        )
      }
    );
    } else if (searchEstado != '') {
      return forms.filter((item) => {
        if (item.Estado_financiamiento.toLowerCase().startsWith(searchEstado.toLowerCase())) {
          return item;
        }
      }).map((item) => {
        return (
          <Table.Row onClick={() => { handleClick(item.ID); }}>
            <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
            <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
            <Table.Cell>{item.Investigador_Principal}</Table.Cell>
            <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
            { getEstado(item.Estado_financiamiento) }
          </Table.Row>
        )
      }
    );
    } else {
      return forms.map(item => (
        <Table.Row onClick={() => { handleClick(item.ID); }}>
            <Table.Cell>{item.Titulo_de_Proyecto}</Table.Cell>
            <Table.Cell>{item.Tipo_de_Proyecto}</Table.Cell>
            <Table.Cell>{item.Investigador_Principal}</Table.Cell>
            <Table.Cell>{item.Tipo_de_participacion}</Table.Cell>
            { getEstado(item.Estado_financiamiento) }
        </Table.Row>)
      )
    }
  }

  return (
    <div>
      <h1>Content</h1>
      <Table striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> 
              <Input type='text' transparent placeholder="Titulo de Proyecto" value={searchTituloProyecto} onChange={(e) => setSearchTituloProyecto(e.target.value)} /> 
            </Table.HeaderCell>
            <Table.HeaderCell> 
              <Input type='text' transparent placeholder="Tipo de Proyecto" value={searchTipoProyecto} onChange={(e) => setSearchTipoProyecto(e.target.value)} /> 
            </Table.HeaderCell>
            <Table.HeaderCell> 
              <Input type='text' transparent placeholder="Investigador Principal" value={searchInvestigador} onChange={(e) => setSearchInvestigador(e.target.value)} /> 
              </Table.HeaderCell>
            <Table.HeaderCell> 
              <Input type='text' transparent placeholder="Tipo de participación" value={searchTipoParticipacion} onChange={(e) => setSearchTipoParticipacion(e.target.value)} /> 
            </Table.HeaderCell>
            <Table.HeaderCell> 
              <Input type='text' transparent placeholder="Estado" value={searchEstado} onChange={(e) => setSearchEstado(e.target.value)} /> 
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            forms != 0 ?
            forms.length 
              ? switchSearch()
                : <> 
                    <Dimmer active inverted>
                      <Loader inverted>Loading</Loader>
                    </Dimmer>
                  </>
            :
            <></>
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
