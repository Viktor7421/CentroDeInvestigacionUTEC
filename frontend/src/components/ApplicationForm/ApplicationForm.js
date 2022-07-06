import React, { Component, useState } from 'react'
import axios from 'axios';
import { Form, Message, Select } from 'semantic-ui-react'
import "./ApplicationForm.scss"
import UploadFile from "../UploadFile/UploadFile"

const FORM_URL = 'http://127.0.0.1:5000/add/forms';

const optionsDepAcad = [
    { key: 'bioi', text: 'Bioingeniería',               value: 'Bioingeniería' },
    { key: 'ce2a', text: 'CE2A',                        value: 'CE2A' },
    { key: 'cien', text: 'Ciencias',                    value: 'Ciencias' },
    { key: 'comp', text: 'Ciencia de la computación',   value: 'Ciencia de la computación' },
    { key: 'hacs', text: 'HACS',                        value: 'HACS' },
    { key: 'iamb', text: 'Ingeniería Ambiental',        value: 'Ingeniería Ambiental' },
    { key: 'iciv', text: 'Ingeniería Civil',            value: 'Ingeniería Civil' },
    { key: 'iele', text: 'Ingeniería Electrónica',      value: 'Ingeniería Electrónica' },
    { key: 'iene', text: 'Ingeniería de la Energía',    value: 'Ingeniería de la Energía' },
    { key: 'iind', text: 'Ingeniería Industrial',       value: 'Ingeniería Industrial' },
    { key: 'imec', text: 'Ingeniería Mecánica',         value: 'Ingeniería Mecánica' },
    { key: 'imtr', text: 'Ingeniería Mecatrónica',      value: 'Ingeniería Mecatrónica' },
    { key: 'iqui', text: 'Ingeniería Química',          value: 'Ingeniería Química' },
    { key: 'otro', text: 'Otro',                        value: 'otro' },
]

const optionsCenInv = [
    { key: 'bio',           text: 'Centro de investigación en bioingeniería - BIO',                     value: 'Centro de investigación en bioingeniería - BIO' },
    { key: 'cita',          text: 'Centro de investigación y tecnología del agua - CITA',               value: 'Centro de investigación y tecnología del agua - CITA' },
    { key: 'cicc',          text: 'Centro de investigación de cemento y concreto - CICC',               value: 'Centro de investigación de cemento y concreto - CICC' },
    { key: 'cirso',         text: 'Centro de impacto y responsabilidad social - CIRSO',                 value: 'Centro de impacto y responsabilidad social - CIRSO' },
    { key: 'patrimonio',    text: 'Centro de investigación y conservación del patrimonio - PATRIMONIO', value: 'Centro de investigación y conservación del patrimonio - PATRIMONIO' },
    { key: 'compsust',      text: 'Centro de investigación en computación sustentable - COMPSUST',      value: 'Centro de investigación en computación sustentable - COMPSUST' },
    { key: 'noap',          text: 'No aplica',                                                          value: 'No aplica' },
    { key: 'otro',          text: 'Otro',                                                               value: 'Otro' },
]

const optionsGenResTop = [
    { key: 'aye', text: 'Administrativas y Económicas',             value: 'Administrativas y Económicas' },
    { key: 'ama', text: 'Agua y Medio Ambiente',                    value: 'Agua y Medio Ambiente' },
    { key: 'bio', text: 'Bioingeniería',                            value: 'Bioingeniería' },
    { key: 'cso', text: 'Computación Sostenible',                   value: 'Computación Sostenible' },
    { key: 'eym', text: 'Energía y Minas',                          value: 'Energía y Minas' },
    { key: 'eea', text: 'Excelencia en Enseñanza y Aprendizaje',    value: 'Excelencia en Enseñanza y Aprendizaje' },
    { key: 'iyt', text: 'Ingeniería y Tecnlología',                 value: 'Ingeniería y Tecnlología' },
    { key: 'irs', text: 'Impacto y Responsabilidad Social',         value: 'Impacto y Responsabilidad Social' },
    { key: 'msc', text: 'Materiales y Sistemas Constructivos',      value: 'Materiales y Sistemas Constructivos' },
    { key: 'pat', text: 'Patrimonio',                               value: 'Patrimonio' },
]

const optionsProTyp = [
    { key: 'ori', text: 'Investigación y desarrollo (original research)', value: 'Investigación y desarrollo (original research)' },
    { key: 'ext', text: 'Actividad de extensión o capacitación (extension activity)', value: 'Actividad de extensión o capacitación (extension activity)' },
    { key: 'otr', text: 'Otro', value: 'Otro' },
]

const optionsPart = [
    { key: 'eso', text: 'Entidad Solicitante',  value: 'Entidad Solicitante' },
    { key: 'eas', text: 'Entidad Asociada',     value: 'Entidad Asociada' },
    { key: 'otr', text: 'Otro',                 value: 'Otro' },
]

const optionsFin = [
  { key: 'rfp', text: 'Fondo concursable externo (RFP)', value: 'Fondo concursable externo (RFP)' },
  { key: 'fce', text: 'Fondo con empresas (Business)', value: 'Fondo con empresas (Business)' },
  { key: 'fin', text: 'Financiamiento interno (UTEC)', value: 'Financiamiento interno (UTEC)'},
  { key: 'otro', text: 'Otro', value: 'Otro' },
]

const optionsCurrency = [
    { key: 'usd', text: 'USD', value: 'USD' },
    { key: 'pen', text: 'PEN', value: 'PEN' },
    { key: 'gbp', text: 'GBP', value: 'GBP' },
    { key: 'chf', text: 'CHF', value: 'CHF' },
    { key: 'eur', text: 'EUR', value: 'EUR' },
    { key: 'otro', text: 'Otro', value: 'Otro' },
]

const optionsStatus = [
    { key: 'fin', text: 'Financiado', value: 'Financiado' },
    { key: 'nof', text: 'No financiado', value: 'No financiado' },
    { key: 'pen', text: 'Pendiente', value: 'Pendiente' },
]

function ApplicationForm() {

    const [message, setMessage] = useState('');
    const [depAcad, setDepAcad] = useState('');
    const [depAcadOther, setDepAcadOther] = useState('');
    const [cenInv, setCenInv] = useState('');
    const [genResTop, setGenResTop] = useState('');
    const [proyect, setProyect] = useState('');
    const [proTyp, setProTyp] = useState('');
    const [invPrin, setInvPrin] = useState('');
    const [coinv, setCoinv] = useState('');
    const [part, setPart] = useState('');
    const [date, setDate] = useState('');
    const [instFin, setInstFin] = useState('');
    const [fin, setFin] = useState('');
    const [prePro, setPrePro] = useState(0);
    const [overhead, setOverhead] = useState(0);
    const [equip, setEquip] = useState(0);
    const [currency, setCurrency] = useState('');
    const [status, setStatus] = useState('');
    const [approval, setApproval] = useState(false);

    const handleDepAcad = async (e, data) => {
        setDepAcad(data.value)
        if (data.value == 'otro') {
            setDepAcadOther(<Form.Input 
                fluid 
                required 
                label='Otro'  
                onChange={(e) => setDepAcad(e.target.value)} 
            />)
            return
        } else {
            setDepAcadOther('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message == '') {
            setMessage(<Message
                error
                header='ERROR'
                content="Hubo un ERROR al enviar la encuesta."
            />)
            return
        }
        try {
            const response = await axios.post(FORM_URL,
                JSON.stringify({
                    UsuarioId:                   JSON.parse(window.localStorage.getItem('user-session')).ID,
                    Departamento_Academico:      depAcad,
                    Centro_de_Investigación:     cenInv,
                    Linea_de_investigacion:      genResTop,
                    Titulo_de_Proyecto:          proyect,
                    Tipo_de_Proyecto:            proTyp,
                    Investigador_Principal:      invPrin,
                    Coeinvestigadores_de_UTEC:   coinv,
                    Tipo_de_participacion:       part,
                    Fecha_de_inicio_de_Proyecto: date,
                    POI_Financiadora:            instFin,
                    Tipo_entidad_financiadora:   fin,
                    Presupuesto_proyecto:        parseInt(prePro),
                    Overhead:                    parseInt(overhead),
                    Monto_asignado:              parseInt(equip),
                    Moneda:                      currency,
                    Estado_financiamiento:       status,
                    Se_requiere_aprovacion:      approval,
                    Estado:                      0
                }),
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
        <div className='conteiner-application-form'>
            <Form onSubmit={ handleSubmit } success error>
                {message}
                
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        required
                        value={depAcad}
                        label='Departamento Académico'
                        options={optionsDepAcad}
                        placeholder='Departamento Académico'
                        onChange={handleDepAcad}
                    />
                    {depAcadOther}
                    <Form.Select
                        fluid
                        required
                        label='Centro de Investigación'
                        options={optionsCenInv}
                        placeholder='Centro de Investigación'
                        onChange={(e, data) => setCenInv(data.value)}
                    />
                    <Form.Select
                        fluid
                        required
                        label='Línea de investigación'
                        options={optionsGenResTop}
                        placeholder='Línea de investigación'
                        onChange={(e, data) => setGenResTop(data.value)}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        required 
                        label='Título del Proyecto' 
                        placeholder='Título del Proyecto' 
                        onChange={(e) => setProyect(e.target.value)} 
                    />
                    <Form.Select
                        fluid
                        required
                        label='Tipo de proyecto'
                        options={optionsProTyp}
                        placeholder='Tipo de proyecto'
                        onChange={(e, data) => setProTyp(data.value)}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        required
                        label='Investigador Principal (PI)' 
                        placeholder='Investigador Principal (PI)' 
                        onChange={(e) => setInvPrin(e.target.value)} 
                    />
                    <Form.Input 
                        fluid 
                        required
                        label='Coinvestigadores de UTEC (CO-PI)' 
                        placeholder='Coinvestigadores de UTEC (CO-PI)' 
                        onChange={(e) => setCoinv(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        required
                        label='Tipo de participación de UTEC / UTEC participation'
                        options={optionsPart}
                        placeholder='Tipo de participación de UTEC / UTEC participation'
                        onChange={(e, data) => setPart(data.value)}
                    />
                    <Form.Input 
                        fluid 
                        required
                        label='Fecha aproximada de inicio del proyecto' 
                        placeholder='Fecha aproximada de inicio del proyecto' 
                        type='date' 
                        onChange={(e) => setDate(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        required
                        label='Programa o institución financiadora' 
                        placeholder='Programa o institución financiadora'
                        onChange={(e) => setInstFin(e.target.value)} 

                    />
                    <Form.Select
                        fluid
                        label='Tipo de entidad financiadora'
                        options={optionsFin}
                        placeholder='Tipo de entidad financiadora'
                        onChange={(e, data) => setFin(data.value)}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        required
                        label='Presupuesto del Proyecto' 
                        placeholder='Presupuesto del Proyecto' 
                        type='number'
                        onChange={(e) => setPrePro(e.target.value)} 
                    />
                    <Form.Input 
                        fluid 
                        required
                        label='Overhead' 
                        placeholder='Overhead' 
                        type='number'
                        onChange={(e) => setOverhead(e.target.value)}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        required
                        label='Monto asignado para compra de equipamiento' 
                        placeholder='Monto asignado para compra de equipamiento' 
                        type='number'
                        onChange={(e) => setEquip(e.target.value)}
                    />
                    <Form.Select
                        fluid
                        required
                        label='Moneda'
                        options={optionsCurrency}
                        placeholder='Moneda'
                        onChange={(e, data) => setCurrency(data.value)}
                    />
                    <Form.Select
                        fluid
                        required
                        label='Estado de financiamiento'
                        options={optionsStatus}
                        placeholder='Estado de financiamiento'
                        onChange={(e, data) => setStatus(data.value)}
                    />
                </Form.Group>
                <UploadFile/>
                <Form.Checkbox 
                    label='Por favor indique si requiere aprobación de la DIN, DGA y DAF. Esto aplica a todas las propuestas que contemplen un pago de overhead menor a 30%.' 
                    onChange={() => setApproval(!approval)}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default ApplicationForm;