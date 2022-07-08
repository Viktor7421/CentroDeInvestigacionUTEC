import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const GET_USERS_URL = 'http://127.0.0.1:5000/users';

function UpdateRole() {
    let navigate = useNavigate();
    const firstRender = useRef(true);
    const [users, setUsers] = useState();

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        getForms();
    }, []);

    const getUsers = async (e) => {
        try {
            const response = await axios.get(GET_USERS_URL,
                {
                });  
              console.log('yes');
              setUsers(response.data);
        } catch(err) {
            console.log('error');
        }
      }

    return(
        <>
        <h1>Actualizar un nuevo usuario</h1>
        <Table striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Usuario</Table.HeaderCell>
                    <Table.HeaderCell>Cargo</Table.HeaderCell>
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
        </>
    )
}

export default UpdateRole;