import React, { useState } from 'react';
import Logout from '../Logout/Logout';
import Content from '../Content/Content'
import ApplicationForm from '../ApplicationForm/ApplicationForm'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillHouseDoorFill, BsLayoutTextSidebarReverse } from 'react-icons/bs';
import { Routes, Route } from 'react-router-dom';
import './Dashboard.scss';
import { Form } from 'react-bootstrap';


function Dashboard() {
  let navigate = useNavigate();
  return (
    <div id="conteiner-dashboard">
      <div className="navbar">
        <a href="" className="logo">Dashboard</a>
      </div>
      <div className="area"></div><nav className="main-menu">
            <ul>
                <Link to=''>
                  <li>
                      <a href="http://justinfarrow.com">
                          <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                          <span className="nav-text">
                              Dashboard
                          </span>
                      </a>
                  </li>
                </Link>
                <Link to='form'>
                  <li className="has-subnav">
                      <a href="#">
                          <i className="fa fa-home fa-2x"><BsLayoutTextSidebarReverse /></i>
                          <span className="nav-text">
                              Forms
                          </span>
                      </a>
                  </li>
                </Link>
                <li className="has-subnav">
                    <a href="#">
                        <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span className="nav-text">
                            Pages
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span className="nav-text">
                            Graphs and Statistics
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span className="nav-text">
                           Quotes
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span className="nav-text">
                            Tables
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span className="nav-text">
                            Maps
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span className="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
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
            <Route path='form' element={<ApplicationForm />} />
          </Routes>
        </div>
    </div>
  );
}
export default Dashboard;