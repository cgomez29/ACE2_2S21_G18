import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Dashboard.css';
import {getAnalyzed} from '../../helpers/servicesAPI'

const Dashboard = () => {
    const [data, setData] = useState('');
    
    useEffect(() =>  {
        
        async function fetch() {
            const data = await getAnalyzed();
            setData(data.data);
            console.table(data.data)
        };
        fetch();
    }, [])

    return (
        <div className="animate__animated animate__fadeIn">
            <h2 class="dash-title">WELCOME</h2>
            <div className="dash-cards">
                <Card title={'ID silla'} />
                <Card
                    title={'Horas de uso'}
                    icon={'ti-alarm-clock'}
                />
                <Card
                    title={'Numero promedio que el usuario se levanta al dia'}
                    value={data.levantadas_promedio}
                />
                <Card 
                    title={'Tiempo de uso promedio de la silla por día'} 
                    value={data.tiempo_promedio}
                />
                <Card title={'En linea'} />
                <Card 
                    title={'Tiempo en linea'} 
                    value={data.tiempo_total}
                />
            </div>
        </div>
    );
};

export default Dashboard;
