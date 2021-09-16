import React from 'react';
import BarGraph from '../../BarGraph/BarGraph';
import '../graphGeneral.css';

export const MayorUso = () => {
    const data = [5, 1, 6, 8, 1, 7, 8];
    return (
        <div className="animate__animated animate__fadeIn">
            <h3>Dias de MayorUso</h3>
            <div className="graph-graph">
                <BarGraph
                    value={data}
                    title={'Dias de menor uso y de no uso'}
                />
            </div>
        </div>
    );
};
