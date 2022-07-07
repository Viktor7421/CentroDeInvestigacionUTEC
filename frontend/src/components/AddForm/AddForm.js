import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Menu } from "semantic-ui-react"
import UploadFile from "../UploadFile/UploadFile";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

function AddForm() {
    let navigate = useNavigate();
    const [activeItem, setActiveItem] = useState();

    const handleItemClick = async (e, { name }) => {
        if(name === 'form') {
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
                name='form'
                active={activeItem === 'form'}
                content='Encuesta'
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