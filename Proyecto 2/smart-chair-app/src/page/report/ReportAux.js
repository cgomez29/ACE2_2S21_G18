import React from 'react';
import BarGraph from '../../components/BarGraph/BarGraph';
import LineGraph from '../../components/LineGraph/LineGraph';

import './Report.css';

const ReportAux = () => {
    const data = [5, 1, 6, 8, 1, 7, 8];
    return (
        <div className="animate__animated animate__fadeIn">
            <div>
                <div className="content-graph">
                    <div className="graph">
                        <BarGraph
                            value={data}
                            title={'Dias de menor uso y de no uso'}
                        />
                    </div>
                    <div className="graph">
                        <BarGraph
                            value={data}
                            title={'Dias de menor uso y de no uso'}
                        />
                    </div>
                    <div className="graph">
                        <LineGraph
                            value={data}
                            title={'Dias de menor uso y de no uso'}
                        />
                    </div>
                    <div className="graph">
                        <LineGraph
                            value={data}
                            title={'Dias de menor uso y de no uso'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;