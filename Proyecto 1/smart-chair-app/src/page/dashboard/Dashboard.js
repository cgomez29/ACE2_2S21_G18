import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Dashboard.css";
import { getAnalyzed, getTimpoReal } from "../../helpers/servicesAPI";
import { PieMayorUso } from "../../components/Graph/PieMayorUso/PieMayorUso";
import moment from "moment";
import { LineGraph } from "../../components/LineGraph/LineGraph";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [data3, setData3] = useState(""); //Tiempo real
  const [lineData, setLineData] = useState("");
  const [lineLabel, setLineLabel] = useState("");

  useEffect(() => {
    async function fetch() {
      const data = await getAnalyzed();
      setData(data.data);
    }
    fetch();

    async function fetch2() {
      const data = await getAnalyzed();

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
      const data = await getTimpoReal();
      setData3(data.data);
    }
    fetch3();
  }, []);

  const reload = () => {
    async function fetch3() {
      const data = await getTimpoReal();
      setData3(data.data);
    }
    fetch3();
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 class="dash-title">WELCOME</h2>

      <div className="dash-cards">
        <Card title={"ID silla"} value={"Chair: 1"} />
        <Card
          title={"Horas de uso"}
          icon={"ti-alarm-clock"}
          value={Math.trunc(data.tiempo_total)}
        />
        <Card
          title={"Numero promedio que el usuario se levanta al dia"}
          value={Math.trunc(data.levantadas_promedio)}
        />
        <Card
          title={"Tiempo de uso promedio de la silla por día"}
          value={Math.trunc(data.tiempo_promedio)}
        />

        <Card title={"En linea desde: "} value={data3.inicio} />
        <button onClick={reload} className="reload-button">
          <Card title={"Tiempo en linea"} value={data3.tiempo} />
        </button>
        <div className="graph-graph">
          <PieMayorUso />
        </div>
        <div className="graph-graph">
          <LineGraph
            title={"Tendencia del peso"}
            value={lineData}
            labels={lineLabel}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
