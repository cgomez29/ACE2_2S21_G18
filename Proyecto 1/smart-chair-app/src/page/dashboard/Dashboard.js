import React from 'react'
import Card from '../../components/Card/Card'
import './Dashboard.css'


const Dashboard = () => {
    return (
        <>
            <h2 class="dash-title">Overview</h2>
            <div className="dash-cards">
                <Card title={"ID silla"} />
                <Card title={"Horas de uso"} icon={"ti-alarm-clock"} value={5} />
                <Card title={"Numero promedio que el usuario se levanta al dia"} />
                <Card title={"Tiempo de uso promedio de la silla por día"} />
                <Card title={"En linea"} />
                <Card title={"Tiempo en linea"} />
            </div>
        </>
    )
}

export default Dashboard