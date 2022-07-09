import React, { useState } from 'react';
import Logout from '../Logout/Logout';
import Content from '../Content/Content'
import ApplicationForm from '../ApplicationForm/ApplicationForm'
import UnicForm from '../Form/Form'
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill, BsLayoutTextSidebarReverse, BsFillBarChartFill } from 'react-icons/bs';
import { Routes, Route } from 'react-router-dom';
import './Dashboard.scss';
import { Form } from 'react-bootstrap';
import AddForm from '../AddForm/AddForm';
import Panel from '../Panel/Panel';
import AdminAuth from '../AdminAuth/AdminAuth';


function Dashboard() {
  return (
    <div id="conteiner-dashboard">
      <div className="navbar">
        <a href="" className="logo">Dashboard</a>
      </div>
      <div className="area"></div><nav className="main-menu">
            <ul>
                <Link to=''>
                  <li>
                      <a href="">
                          <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                          <span className="nav-text">
                              Dashboard
                          </span>
                      </a>
                  </li>
                </Link>
                { 
                  JSON.parse(window.localStorage.getItem('user-session')).Cargo === 'Profesor' ?
                  <Link to='add'>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-home fa-2x"><BsLayoutTextSidebarReverse /></i>
                            <span className="nav-text">
                                Forms
                            </span>
                        </a>
                    </li>
                  </Link> : <></> 
                }
                <Link to='panel'>
                  <li className="has-subnav">
                      <a href="#">
                          <i className="fa fa-home fa-2x"><BsFillBarChartFill /></i>
                          <span className="nav-text">
                              Panel
                          </span>
                      </a>
                  </li>
                </Link> : <></>
            </ul>

            <ul className="logout">
                <li>
                  <Logout/>
                </li>  
            </ul>
        </nav>
        <div className="body-text">
          <Routes>
            <Route path='' element={<Content />} />
            <Route path='add/*' element={<AddForm />} />
            <Route path='form/:formId' element={<UnicForm />} />
            <Route path='panel' element={<Panel />} />
            <Route element={<AdminAuth />}>
              <Route path='new_user' element={<Panel />} />
            </Route>
          </Routes>
        </div>
    </div>
  );
}
export default Dashboard;