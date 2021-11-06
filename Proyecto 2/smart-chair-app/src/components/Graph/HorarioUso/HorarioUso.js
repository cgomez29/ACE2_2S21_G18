import React, { useState } from 'react';
import { useEffect } from 'react';
import { LineGraph } from '../../LineGraph/LineGraph';
import '../graphGeneral.css';
import { getHorarioUso } from './horarioUsoHelper';
export const HorarioUso = () => {
    const [horario, setHorario] = useState({
        diaLista: [],
        usoLista: [],
        total: 0,
    });
    const loadHorario = async () => {
        const { usoLista, diaLista, total } = await getHorarioUso();
        setHorario({
            ...horario,
            diaLista: diaLista,
            usoLista: usoLista,
            total: total,
        });
    };

    useEffect(() => {
        loadHorario();
    }, []);
    return (
        <div className="animate__animated animate__fadeIn">
            <h2>Horario de uso</h2>
            <br />
            <p>Total de horas: {horario.total.toFixed(1)} h</p>
            <br />
            <br />
            <div className="graph-graph">
                <LineGraph
                    title="Horario de uso (Dia/Hora)"
                    value={horario.usoLista}
                    labels={horario.diaLista}
                />
            </div>
        </div>
    );
};
