import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Dimmer, Loader, Button, Header, Segment, Table } from 'semantic-ui-react'
import { useParams } from "react-router-dom";

const GET_FORM_URL = 'http://127.0.0.1:5000/forms/';
const VALIDATE_FORM_URL = 'http://127.0.0.1:5000/forms/validate/';
const DENEGATE_FORM_URL = 'http://127.0.0.1:5000/forms/denegate/';

function UnicForm() {
    const { formId } = useParams();
    const firstRender = useRef(true);
    const [form, setForm] = useState();

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        getForm();
    }, []);
    
    const getForm = async (e) => {
        try {
            const response = await axios.get(GET_FORM_URL+formId, {});
            setForm(response.data);
        } catch(err) {
            console.log('error');
        }
    }

    const validate = async (e) => {
        try {
            const response = await axios.post(VALIDATE_FORM_URL+formId, {});
            setForm(response.data);
        } catch(err) {
            console.log('error');
        }
    }

    const denegate = async (e) => {
        try {
            const response = await axios.post(DENEGATE_FORM_URL+formId, {});
            setForm(response.data);
        } catch(err) {
            console.log('error');
        }
    }

    const getEstado = (status) => {
        if (status == 0) return "Pendiente"
        if (status == 1) return "Aprovado"
        if (status == 2) return "Rechazado"
    }

    return(
        <>
        {console.log(formId)}
        {
            form ? 
            <>
                <Header as='h2' attached='top'>
                    {form.Titulo_de_Proyecto}
                    <Header.Subheader>
                    {form.Investigador_Principal}
                    </Header.Subheader>
                </Header>
                <Table>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={10}>Categoría</Table.HeaderCell>
                        <Table.HeaderCell width='six'>Descripción</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Departamento_Academico</Table.Cell>
                            <Table.Cell>{form.Departamento_Academico}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Centro_de_Investigación</Table.Cell>
                            <Table.Cell>{form.Centro_de_Investigación}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Linea_de_investigacion</Table.Cell>
                            <Table.Cell>{form.Linea_de_investigacion}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Coeinvestigadores_de_UTEC</Table.Cell>
                            <Table.Cell>{form.Coeinvestigadores_de_UTEC}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Departamento_Academico</Table.Cell>
                            <Table.Cell>{form.Tipo_de_participacion}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Presupuesto_proyecto</Table.Cell>
                            <Table.Cell>{form.Presupuesto_proyecto}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Overhead</Table.Cell>
                            <Table.Cell>{form.Overhead}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Monto_asignado</Table.Cell>
                            <Table.Cell>{form.Monto_asignado}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Moneda</Table.Cell>
                            <Table.Cell>{form.Moneda}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Se_requiere_aprovacion</Table.Cell>
                            <Table.Cell>{form.Se_requiere_aprovacion ? <p>Si</p> : <p>No</p>}</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>Estado_financiamiento</Table.HeaderCell>
                        <Table.HeaderCell>{getEstado(form.Estado_financiamiento)}</Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>
                { 
                  JSON.parse(window.localStorage.getItem('user-session')).Cargo === 'Administrador' ?
                  <>
                  <Button positive onClick={validate}>Aceptar</Button>
                  <Button negative onClick={denegate}>Canelar</Button>
                  </> : <></>
                }
            </> 
            : 
            <>
                <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
                </Dimmer>
            </>
        }
        </>
    )
}

export default UnicForm;