import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import "./ApplicationForm.scss"

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

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
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
                <Form.Group inline>
                <label>Size</label>
                <Form.Radio
                    label='Small'
                    value='sm'
                    checked={value === 'sm'}
                    onChange={this.handleChange}
                />
                <Form.Radio
                    label='Medium'
                    value='md'
                    checked={value === 'md'}
                    onChange={this.handleChange}
                />
                <Form.Radio
                    label='Large'
                    value='lg'
                    checked={value === 'lg'}
                    onChange={this.handleChange}
                />
                </Form.Group>
                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
  }
}

export default ApplicationForm;