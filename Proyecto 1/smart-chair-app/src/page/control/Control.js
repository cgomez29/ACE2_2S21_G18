import React from 'react';
import { bodyContent, headers } from '../../components/Table/helperTable';
import { Table } from '../../components/Table/Table';
import './control.css';
const Control = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="title-control">
                <h2>Datos Crudos</h2>
            </div>
            <div className="body-control">
                <Table columns={headers} rows={bodyContent} />
            </div>
        </div>
    );
};

export default Control;
