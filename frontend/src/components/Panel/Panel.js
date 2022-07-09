import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Panel.scss"

const GET_FORMS_URL = 'http://qhapacnan.com:5000/forms';
const GET_USER_FORMS_URL = 'http://qhapacnan.com:5000/forms/user/';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Panel() {
    return(
      <>
      <h1>Panel</h1>
      <div className='body-panel'>
        <DepAcad />
        <CentroInv />
        <LineaInv />
        <ProType />
      </div>
      </>
    )
}

function DepAcad() {

  const firstRender = useRef(true);
  const [myData, setMyData] = useState([
    { name: 'Bioingeniería',               value: 0 },
    { name: 'CE2A',                        value: 0 },
    { name: 'Ciencias',                    value: 0 },
    { name: 'Ciencia de la computación',   value: 0 },
    { name: 'HACS',                        value: 0 },
    { name: 'Ingeniería Ambiental',        value: 0 },
    { name: 'Ingeniería Civil',            value: 0 },
    { name: 'Ingeniería Electrónica',      value: 0 },
    { name: 'Ingeniería de la Energía',    value: 0 },
    { name: 'Ingeniería Industrial',       value: 0 },
    { name: 'Ingeniería Mecánica',         value: 0 },
    { name: 'Ingeniería Mecatrónica',      value: 0 },
    { name: 'Ingeniería Química',          value: 0 },
    { name: 'Otro',                        value: 0 },
  ])

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
        getData(response.data);
    } catch(err) {
        console.log('error');
    }
  }

  const getData = async (e) => {
    let data = [];
    e.map((item) => {    
      let obj = data.find(o => o.name == item.Departamento_Academico)
      obj ? obj.value+=1 : data.push({ name: item.Departamento_Academico, value: 1 }) 
    })

    console.log(data)
    setMyData(data)
  } 


  return(
    <div className='conteiner-card-chart'>
      <div className='card-chart'>
        <h2> Departamento Academico </h2>
        <div className='conteiner-chart'>
          <div className='dimension-chart'>
            <ResponsiveContainer width={340} height={300}>
              <BarChart
                width={500}
                height={300}
                data={myData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#0088FE" />
              </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
  )
}

function CentroInv() {
  const firstRender = useRef(true);
  const [myData, setMyData] = useState([
    {name: 'Centro de investigación en bioingeniería - BIO',                     value: 0 },
    {name: 'Centro de investigación y tecnología del agua - CITA',               value: 0 },
    {name: 'Centro de investigación de cemento y concreto - CICC',               value: 0 },
    {name: 'Centro de impacto y responsabilidad social - CIRSO',                 value: 0 },
    {name: 'Centro de investigación y conservación del patrimonio - PATRIMONIO', value: 0 },
    {name: 'Centro de investigación en computación sustentable - COMPSUST',      value: 0 },
    {name: 'No aplica',                                                          value: 0 },
    {name: 'Otro',                                                               value: 0 },
  ])

  
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
        getData(response.data);
    } catch(err) {
        console.log('error');
    }
  }

  const getData = async (e) => {
    let data = [];
    e.map((item) => {    
      let obj = data.find(o => o.name == item.Centro_de_Investigación)
      obj ? obj.value++ : data.push({ name: item.Centro_de_Investigación, value: 1 }) 
    })

    console.log(data)
    setMyData(data)
  }
  
  return(
    <div className='conteiner-card-chart'>
      <div className='card-chart'>
        <h2> Centro de Investigación </h2>
        <div className='conteiner-chart'>
          <div className='dimension-chart'>
            <ResponsiveContainer width={340} height={300}>
              <BarChart
                width={500}
                height={300}
                data={myData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
  )
}

function LineaInv() {
  const firstRender = useRef(true);
  const [myData, setMyData] = useState([
    { name: "Strong Passwords", value: 2 },
    { name: "Weak Passwords", value: 1 },
  ]);

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
        getData(response.data);
    } catch(err) {
        console.log('error');
    }
  }

  const getData = async (e) => {
    let data = [];
    e.map((item) => {    
      let obj = data.find(o => o.name == item.Linea_de_investigacion)
      obj ? obj.value++ : data.push({ name: item.Linea_de_investigacion, value: 1 }) 
    })

    console.log(data)
    setMyData(data)
  }

  return(
    <div className='conteiner-card-chart'>
      <div className='card-chart'>
        <h2> Linea de investigacion </h2>
        <div className='conteiner-chart'>
          <div className='dimension-chart'>
            <ResponsiveContainer width={340} height={300}>
              <BarChart
                width={500}
                height={300}
                data={myData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
  )
}

function ProType() {
  const firstRender = useRef(true);
  const [myData, setMyData] = useState([
    { name: "Strong Passwords", value: 2 },
    { name: "Weak Passwords", value: 1 },
  ]);

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
        getData(response.data);
    } catch(err) {
        console.log('error');
    }
  }

  const getData = async (e) => {
    let data = [];
    e.map((item) => {    
      let obj = data.find(o => o.name == item.Tipo_de_Proyecto)
      obj ? obj.value++ : data.push({ name: item.Tipo_de_Proyecto, value: 1 }) 
    })

    console.log(data)
    setMyData(data)
  } 

  return(
    <div className='conteiner-card-chart'>
      <div className='card-chart'>
        <h2> Departamento Académico </h2>
        <div className='conteiner-chart'>
          <div className='dimension-chart'>
            <PieChart width={340} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={myData}
                outerRadius={100}
                label
              >
              {myData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Panel;