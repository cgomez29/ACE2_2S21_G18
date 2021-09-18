import React, { useEffect, useState } from 'react';
import { getDataCrud, headers } from '../../components/Table/helperTable';
import { Table } from '../../components/Table/Table';
import './control.css';
const Control = () => {
    const [dataList, setDataList] = useState([]);
    const loadData = async () => {
        const dataCrud = await getDataCrud();
        setDataList(dataCrud);
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="title-control">
                <h2>Datos Crudos</h2>
            </div>
            <div className="body-control">
                <Table columns={headers} rows={dataList} />
            </div>
        </div>
    );
};

export default Control;
