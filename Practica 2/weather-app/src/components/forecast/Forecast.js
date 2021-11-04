import React, { useEffect, useState } from 'react';
import { getStatus } from '../../helpers/helper';

import './forecast.css';

export const Forecast = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const list = await getStatus();
        setData(list);
    };

    const stateWeather = (lluvia, calor) => {
        if (lluvia === true && calor === true) {
            return 'Parcialmente soleado con lluvia';
        } else if (lluvia === true) {
            return 'Lluvia';
        } else if (calor === true) {
            return 'Soleado';
        }
        return '';
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="f-cards">
            {data.map(
                (
                    { dia, visibilidad, lluvia, calor, icono, velocidad },
                    index
                ) => (
                    <div className="f-card" key={index}>
                        <div className="f-circle">
                            <div className="f-content-title">
                                <h2>{dia}</h2>
                                <i className={`icono ${icono}`}></i>
                            </div>
                        </div>
                        <div className="f-body-card">
                            <p>
                                Velocidad viento: <b>{velocidad}</b>
                            </p>
                            {dia && (
                                <p>
                                    Estado: <b>{stateWeather(lluvia, calor)}</b>
                                </p>
                            )}
                            <p>
                                Visibilidad: <b>{visibilidad}</b>{' '}
                            </p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
