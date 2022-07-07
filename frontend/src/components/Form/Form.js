import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Dimmer, Loader } from 'semantic-ui-react'
import { useParams } from "react-router-dom";

const GET_FORM_URL = 'http://127.0.0.1:5000/forms/';

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
            console.log(formId);
            console.log(GET_FORM_URL+formId);
            setForm(response.data);
        } catch(err) {
            console.log('error');
        }
    }

    return(
        <>
        {console.log(formId)}
        {
            form ? 
            <>
                <h1>{form.Titulo_de_Proyecto}</h1>
                <h2>{form.Departamento_Academico}</h2>
                <h2>{form.Centro_de_Investigación}</h2>
                <h2>{form.Linea_de_investigacion}</h2>
                <h2>{form.Tipo_de_Proyecto}</h2>
                <h2>{form.Investigador_Principal}</h2>
                <h2>{form.Coeinvestigadores_de_UTEC}</h2>
                <h2>{form.Tipo_de_participacion}</h2>
                <h2>{form.Fecha_de_inicio_de_Proyecto}</h2>
                <h2>{form.POI_Financiadora}</h2>
                <h2>{form.Tipo_entidad_financiadora}</h2>
                <h2>{form.Presupuesto_proyecto}</h2>
                <h2>{form.Overhead}</h2>
                <h2>{form.Monto_asignado}</h2>
                <h2>{form.Moneda}</h2>
                <h2>{form.Se_requiere_aprovacion}</h2>
                <h2>{form.Estado_financiamiento}</h2>
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