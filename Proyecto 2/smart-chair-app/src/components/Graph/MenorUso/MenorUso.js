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

      let m = 0;//media
      data.data.data.forEach(({ dia, uso }) => {
        array.push(uso);
        m += uso;
        
      });

      setMedia((m/7).toFixed(2));

      let arrayLabel = [];
      data.data.data.forEach(({ dia, uso }) => {
        arrayLabel.push(dia);

        if(uso === 0){
          arrNoUso.push(dia);
        }

      });

      setNoUso(arrNoUso);
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
          title={"Dias de menor uso y de no uso"}
          labels={label}
          media={media}
        />
      </div>
    </div>
  );
};
