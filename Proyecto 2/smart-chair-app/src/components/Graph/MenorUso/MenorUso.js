import React, { useEffect, useState } from "react";
import BarGraph from "../../BarGraph/BarGraph";
import { getAVG } from "../../../helpers/servicesAPI";
import "../graphGeneral.css";
import moment from "moment";

export const MenorUso = () => {
  const [data, setData] = useState("");
  const [label, setLabel] = useState("");
  const [media, setMedia] = useState(0);
  const [noUso, setNoUso] = useState([])


  useEffect(() => {
    async function fetch() {
      const data = await getAVG();

      let array = [];
      let arrNoUso = [];

      setMedia(data.data.tiempo_promedio);

      data.data.semana.forEach(({ dia, tiempo_promedio }) => {
        array.push(tiempo_promedio);
      });


      let arrayLabel = [];
      data.data.semana.forEach(({ dia, tiempo_promedio }) => {
        arrayLabel.push(dia);

        if(tiempo_promedio === 0){
          arrNoUso.push(dia);
        }

      });

      if (arrNoUso.length !== 0) {
        setNoUso(arrNoUso);
      } else {
        setNoUso(["Ningún dia"]);
      }

      setData(array);
      setLabel(arrayLabel);
    }
    fetch();
  }, []);

  return (
    <div>
      <h2>Dias de Menor Uso</h2>
      <br/>
      <h3>Dias que no se utilizó la silla:</h3>
      {
        noUso.map( (dia) => (
          <p>{dia}</p>
        ))
      }
      <div className="graph-graph">
        <BarGraph
          value={data}
          title={"Dias de menor uso y de no uso (Dia/horas)"}
          labels={label}
          media={media}
        />
      </div>
    </div>
  );
};
