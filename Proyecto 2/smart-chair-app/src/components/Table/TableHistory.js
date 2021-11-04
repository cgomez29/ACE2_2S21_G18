import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { getDataByDate, formatearFecha } from './helperTable';

export const TableHistory = () => {
    const { dateHistory } = useParams();
    const [data, setData] = useState({
        listByDate: [],
        horaTotal: 0,
    });
    const { listByDate, horaTotal } = data;
    const loadData = async () => {
        const newDate = await getDataByDate(dateHistory);
        setData({
            ...data,
            listByDate: newDate.listByDate,
            horaTotal: newDate.horaTotal,
        });
    };
    const dateFormat = useMemo(
        () => formatearFecha(dateHistory),
        [dateHistory]
    );
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="animate__animated animate__fadeIn">
            <h2>
                Historial de <b>{dateFormat}</b>
            </h2>
            <p>Horas aproximadas {horaTotal} h</p>
            <div>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Fecha</th>
                            <th>Inicio</th>
                            <th>Fin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listByDate.map((data, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{dateHistory}</th>
                                <th>{data.inicio}</th>
                                <th>{data.fin}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
