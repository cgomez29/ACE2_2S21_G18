import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Dashboard.css";
import { getAnalyzed, getRealTime, getData } from "../../helpers/servicesAPI";
import { PieMayorUso } from "../../components/Graph/PieMayorUso/PieMayorUso";
import moment from "moment";
import { LineGraph } from "../../components/LineGraph/LineGraph";
import { CountUpTimer } from "../../components/CountUpTimer/CountUpTimer";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [data3, setData3] = useState(""); //Tiempo real
  const [lineData, setLineData] = useState("");
  const [lineLabel, setLineLabel] = useState("");
  const [stop, setStop] = useState(false); //false
  const [hoursMinSecs, setHoursMinSecs] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    async function fetch2() {
      const data = await getAnalyzed();
      setData(data.data);
      let array = [];
      data.data.peso.forEach(({ fecha, peso }) => {
        array.push(peso);
      });

      let arrayLabel = [];
      data.data.peso.forEach(({ fecha, peso }) => {
        arrayLabel.push(moment(fecha).format("DD/MM/YYYY"));
      });

      setLineData(array);
      setLineLabel(arrayLabel);
    }
    fetch2();

    async function fetch3() {
      const data = await getRealTime();
      setData3(data.data);
      let time = data.data.tiempo.split(":");

      if (data.data.inicio !== "00:00:00") {
        setHoursMinSecs({
          hours: parseInt(time[0]),
          minutes: parseInt(time[1]),
          seconds: parseInt(time[2]),
        });
        setStop(true);
      }
    }

    fetch3();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 class="dash-title">WELCOME</h2>
      <div className="dash-cards">
        <Card title={"ID silla"} value={"Chair: 1"} />
        <Card
          title={"Horas de uso"}
          icon={"ti-alarm-clock"}
          value={`${Math.trunc(data.tiempo_total)} h`}
        />
        <Card
          title={"Número promedio que el usuario se levanta al dia"}
          value={`${Math.trunc(data.levantadas_promedio)} veces por dia`}
        />
        <Card
          title={"Tiempo de uso promedio de la silla por día"}
          value={`${Math.trunc(data.tiempo_promedio)} h`}
        />

        <Card title={"En linea desde: "} value={data3.inicio} />
        <Card
          title={"Tiempo en linea"}
          value={<CountUpTimer hoursMinSecs={hoursMinSecs} stop={stop} />}
        />
      </div>
      <div className="contenedor-graph-2">
        <div className="graph-graph">
          <PieMayorUso />
        </div>
        <div className="graph-graph-2 line-graph">
          <LineGraph
            title={"Tendencia del peso kg/dia"}
            value={lineData}
            labels={lineLabel}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
