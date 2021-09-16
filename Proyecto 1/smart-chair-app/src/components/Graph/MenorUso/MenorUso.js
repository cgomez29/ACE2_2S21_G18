import React from 'react';
import BarGraph from '../../BarGraph/BarGraph';
import '../graphGeneral.css';
export const MenorUso = () => {
    const data = [5, 1, 6, 8, 1, 7, 8];
    return (
        <div>
            <h2>Dias de Menor Uso</h2>
            <div className="graph-graph">
                <BarGraph
                    value={data}
                    title={'Dias de menor uso y de no uso'}
                />
            </div>
        </div>
    );
};
