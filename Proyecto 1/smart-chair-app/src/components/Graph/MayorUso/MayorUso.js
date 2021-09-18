import React, { useEffect, useState } from 'react';
import { getAnalyzed } from '../../../helpers/servicesAPI';
import BarGraph from '../../BarGraph/BarGraph';
import moment from 'moment';
import '../graphGeneral.css';

export const MayorUso = () => {
    const [data, setData] = useState('');
    const [label, setLabel] = useState('');

    useEffect(() => {
        async function fetch() {
            const data = await getAnalyzed();
            let array = [];
            data.data.uso.forEach(({ fecha, uso }) => {
                array.push(uso);
            });

            let arrayLabel = [];
            data.data.uso.forEach(({ fecha, uso }) => {
                arrayLabel.push(moment(fecha).format('DD/MM/YYYY'));
            });

            setData(array);
            setLabel(arrayLabel);
        }
        fetch();
    }, []);

    return (
        <div className="animate__animated animate__fadeIn">
            <h3>Dias de MayorUso</h3>
            <div className="graph-graph">
                <BarGraph
                    value={data}
                    title={'Dias de mayor uso'}
                    labels={label}
                />
            </div>
        </div>
    );
};
