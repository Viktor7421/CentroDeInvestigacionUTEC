import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Menu } from "semantic-ui-react"
import UploadFile from "../UploadFile/UploadFile";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

function AddForm() {
    let navigate = useNavigate();
    const [activeItem, setActiveItem] = useState();

    const handleItemClick = async (e, { name }) => {
        if(name === 'Proyecto nacional estatal') {
            return navigate('/home/add/form');
        }
        if(name === 'Proyecto nacional privado') {
            return navigate('/home/add/form');
        }
        if(name === 'Proyecto internacional') {
            return navigate('/home/add/form');
        }
        if(name === 'Proyecto con fondos de UTEC') {
            return navigate('/home/add/form');
        }
        if(name === 'file') {
            return navigate('/home/add/file');
        }
        setActiveItem(name)
    }

    return(
        <>
            <Menu compact>
                <Menu.Item
                name='file'
                active={activeItem === 'file'}
                content='PDF'
                onClick={handleItemClick}
                />

                <Menu.Item
                name='Proyecto nacional estatal'
                active={activeItem === 'Proyecto nacional estatal'}
                content='Proyecto nacional estatal'
                onClick={handleItemClick}
                />

                <Menu.Item
                name='Proyecto nacional privado'
                active={activeItem === 'Proyecto nacional privado'}
                content='Proyecto nacional privado'
                onClick={handleItemClick}
                />

                <Menu.Item
                name='Proyecto internacional'
                active={activeItem === 'Proyecto internacional'}
                content='Proyecto internacional'
                onClick={handleItemClick}
                />

                <Menu.Item
                name='Proyecto con fondos de UTEC'
                active={activeItem === 'Proyecto con fondos de UTEC'}
                content='Proyecto con fondos de UTEC'
                onClick={handleItemClick}
                />
            </Menu>
            
            <div className="body-text">
                <Routes>
                    <Route path='file' element={<UploadFile />} />
                    <Route path='form' element={<ApplicationForm />} />
                </Routes>
            </div>
        </>
    )
}

export default AddForm;