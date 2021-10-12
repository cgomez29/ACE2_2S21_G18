import React, { useEffect, useState } from 'react';
import { getStatus } from '../../helpers/helper';

import './forecast.css';

export const Forecast = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const list = await getStatus();
        setData(list);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="f-cards">
            {data.map(({ dia, visibilidad, lluvia, icono }, index) => (
                <div className="f-card" key={index}>
                    <div className="f-circle">
                        <div className="f-content-title">
                            <h2>{dia}</h2>
                            <i className={`icono ${icono}`}></i>
                        </div>
                    </div>
                    <div className="f-body-card">
                        <p>Visibilidad: {visibilidad}</p>
                        {lluvia && <p>con posibilidad de lluvia</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};
