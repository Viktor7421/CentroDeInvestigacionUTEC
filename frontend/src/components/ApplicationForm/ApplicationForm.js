import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import "./ApplicationForm.scss"
import UploadFile from "../UploadFile/UploadFile"

const optionsDepAcad = [
    { key: 'bioi', text: 'Bioingeniería',               value: 'bioingenieria' },
    { key: 'ce2a', text: 'CE2A',                        value: 'ce2a' },
    { key: 'cien', text: 'Ciencias',                    value: 'ciencias' },
    { key: 'comp', text: 'Ciencia de la computación',   value: 'cienciadelacomputacion' },
    { key: 'hacs', text: 'HACS',                        value: 'hacs' },
    { key: 'iamb', text: 'Ingeniería Ambiental',        value: 'ingenieriaambienta' },
    { key: 'iciv', text: 'Ingeniería Civil',            value: 'ingenieriacivil' },
    { key: 'iele', text: 'Ingeniería Electrónica',      value: 'ingenieriaelectronica' },
    { key: 'iene', text: 'Ingeniería de la Energía',    value: 'ingenieriadelaenergia' },
    { key: 'iind', text: 'Ingeniería Industrial',       value: 'ingenieriaindustrial' },
    { key: 'imec', text: 'Ingeniería Mecánica',         value: 'ingenieriamecanica' },
    { key: 'imtr', text: 'Ingeniería Mecatrónica',      value: 'ingenieriamecatronica' },
    { key: 'iqui', text: 'Ingeniería Química',          value: 'ingenieriaquimica' },
    { key: 'otro', text: 'Otro',                        value: 'otro' },
]

const optionsCenInv = [
    { key: 'bio',           text: 'Centro de investigación en bioingeniería - BIO',                     value: 'bio' },
    { key: 'cita',          text: 'Centro de investigación y tecnología del agua - CITA',               value: 'cita' },
    { key: 'cicc',          text: 'Centro de investigación de cemento y concreto - CICC',               value: 'cicc' },
    { key: 'cirso',         text: 'Centro de impacto y responsabilidad social - CIRSO',                 value: 'cirso' },
    { key: 'patrimonio',    text: 'Centro de investigación y conservación del patrimonio - PATRIMONIO', value: 'patrimonio' },
    { key: 'compsust',      text: 'Centro de investigación en computación sustentable - COMPSUST',      value: 'compsust' },
    { key: 'noap',          text: 'No aplica',                                                          value: 'noap' },
    { key: 'otro',          text: 'Otro',                                                               value: 'otro' },
]

const optionsProTyp = [
    { key: 'ori', text: 'Investigación y desarrollo (original research)', value: 'ori' },
    { key: 'ext', text: 'Actividad de extensión o capacitación (extension activity)', value: 'ext' },
    { key: 'oth', text: 'Otro', value: 'oth' },
]


const optionsGenResTop = [
    { key: 'aye', text: 'Administrativas y Económicas',             value: 'male' },
    { key: 'ama', text: 'Agua y Medio Ambiente',                    value: 'female' },
    { key: 'bio', text: 'Bioingeniería',                            value: 'other' },
    { key: 'cso', text: 'Computación Sostenible',                   value: 'other' },
    { key: 'eym', text: 'Energía y Minas',                          value: 'other' },
    { key: 'eea', text: 'Excelencia en Enseñanza y Aprendizaje',    value: 'other' },
    { key: 'iyt', text: 'Ingeniería y Tecnlología',                 value: 'other' },
    { key: 'irs', text: 'Impacto y Responsabilidad Social',         value: 'other' },
    { key: 'msc', text: 'Materiales y Sistemas Constructivos',      value: 'other' },
    { key: 'pat', text: 'Patrimonio',                               value: 'other' },
]

const optionsPart = [
    { key: 'aye', text: 'Entidad Solicitante',  value: 'male' },
    { key: 'ama', text: 'Entidad Asociada',     value: 'female' },
    { key: 'bio', text: 'Otro',                 value: 'other' },
]

const optionsFin = [
  { key: 'm', text: 'Fondo concursable externo (RFP)', value: 'male' },
  { key: 'f', text: 'Fondo con empresas (Business)', value: 'female' },
  { key: 'f', text: 'Financiamiento interno (UTEC)', value: 'female' },
  { key: 'o', text: 'Otro', value: 'other' },
]

const optionsCurrency = [
    { key: 'm', text: 'USD', value: 'male' },
    { key: 'f', text: 'PEN', value: 'female' },
    { key: 'f', text: 'GBP', value: 'female' },
    { key: 'f', text: 'CHF', value: 'female' },
    { key: 'f', text: 'EUR', value: 'female' },
    { key: 'o', text: 'Otro', value: 'other' },
]

const optionsStatus = [
    { key: 'm', text: 'Financiado', value: 'male' },
    { key: 'f', text: 'No financiado', value: 'female' },
    { key: 'f', text: 'Pendiente', value: 'female' },
]

class ApplicationForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <div className='conteiner-application-form'>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        label='Departamento Académico'
                        options={optionsDepAcad}
                        placeholder='Departamento Académico'
                    />
                    <Form.Select
                        fluid
                        label='Centro de Investigación'
                        options={optionsCenInv}
                        placeholder='Centro de Investigación'
                    />
                    <Form.Select
                        fluid
                        label='Línea de investigación'
                        options={optionsGenResTop}
                        placeholder='Línea de investigación'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Título del Proyecto' placeholder='Título del Proyecto' />
                    <Form.Select
                        fluid
                        label='Tipo de proyecto'
                        options={optionsProTyp}
                        placeholder='Tipo de proyecto'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Investigador Principal (PI)' placeholder='Investigador Principal (PI)' />
                    <Form.Input fluid label='Coinvestigadores de UTEC (CO-PI)' placeholder='Coinvestigadores de UTEC (CO-PI)' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        label='Tipo de participación de UTEC / UTEC participation'
                        options={optionsPart}
                        placeholder='Tipo de participación de UTEC / UTEC participation'
                    />
                    <Form.Input fluid label='Fecha aproximada de inicio del proyecto' placeholder='Fecha aproximada de inicio del proyecto' type='date'/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Programa o institución financiadora' placeholder='Programa o institución financiadora' />
                    <Form.Select
                        fluid
                        label='Tipo de entidad financiadora'
                        options={optionsFin}
                        placeholder='Tipo de entidad financiadora'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Presupuesto del Proyecto' placeholder='Presupuesto del Proyecto' />
                    <Form.Input fluid label='Overhead' placeholder='Overhead' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Monto asignado para compra de equipamiento' placeholder='Monto asignado para compra de equipamiento' />
                    <Form.Select
                        fluid
                        label='Moneda'
                        options={optionsCurrency}
                        placeholder='Moneda'
                    />
                    <Form.Select
                        fluid
                        label='Estado de financiamiento'
                        options={optionsStatus}
                        placeholder='Estado de financiamiento'
                    />
                </Form.Group>
                <UploadFile/>
                <Form.Checkbox label='Por favor indique si requiere aprobación de la DIN, DGA y DAF. Esto aplica a todas las propuestas que contemplen un pago de overhead menor a 30%.' />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
  }
}

export default ApplicationForm;