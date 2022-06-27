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
      <div class="navbar">
        <a href="" class="logo">Dashboard</a>
      </div>
      <div class="area"></div><nav class="main-menu">
            <ul>
                <Link to=''>
                  <li>
                      <a href="http://justinfarrow.com">
                          <i class="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                          <span class="nav-text">
                              Dashboard
                          </span>
                      </a>
                  </li>
                </Link>
                <Link to='form'>
                  <li class="has-subnav">
                      <a href="">
                          <i class="fa fa-home fa-2x"><BsLayoutTextSidebarReverse /></i>
                          <span class="nav-text">
                              Forms
                          </span>
                      </a>
                  </li>
                </Link>
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span class="nav-text">
                            Pages
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span class="nav-text">
                            Graphs and Statistics
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span class="nav-text">
                           Quotes
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span class="nav-text">
                            Tables
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span class="nav-text">
                            Maps
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-home fa-2x"><BsFillHouseDoorFill /></i>
                        <span class="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                  <Logout/>
                </li>  
            </ul>
        </nav>
        <div class="body-text">
          <Routes>
            <Route path='' element={<Content />} />
            <Route path='form' element={<ApplicationForm />} />
          </Routes>
        </div>
    </div>
  );
}
export default Dashboard;