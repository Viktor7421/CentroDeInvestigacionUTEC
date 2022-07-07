import React, { useState } from 'react';
import Logout from '../Logout/Logout';
import Content from '../Content/Content'
import ApplicationForm from '../ApplicationForm/ApplicationForm'
import UnicForm from '../Form/Form'
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill, BsLayoutTextSidebarReverse } from 'react-icons/bs';
import { Routes, Route } from 'react-router-dom';
import './Dashboard.scss';
import { Form } from 'react-bootstrap';
import AddForm from '../AddForm/AddForm';


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
                <Link to='add'>
                  <li className="has-subnav">
                      <a href="#">
                          <i className="fa fa-home fa-2x"><BsLayoutTextSidebarReverse /></i>
                          <span className="nav-text">
                              Forms
                          </span>
                      </a>
                  </li>
                </Link>
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
          </Routes>
        </div>
    </div>
  );
}
export default Dashboard;