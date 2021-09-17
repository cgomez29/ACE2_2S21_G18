import React, { useEffect, useState } from "react";
import BarGraph from "../../BarGraph/BarGraph";
import { getAnalyzed } from "../../../helpers/servicesAPI";
import "../graphGeneral.css";
import moment from "moment";

export const MenorUso = () => {
  const [data, setData] = useState("");
  const [label, setLabel] = useState("");
  useEffect(() => {
    async function fetch() {
      const data = await getAnalyzed();
      let array = [];
      data.data.uso.forEach(({ fecha, uso }) => {
        array.push(uso);
      });

      let arrayLabel = [];
      data.data.uso.forEach(({ fecha, uso }) => {
        arrayLabel.push(moment(fecha).format("DD/MM/YYYY"));
      });

      setData(array);
      setLabel(arrayLabel);
    }
    fetch();
  }, []);

  return (
    <div>
      <h2>Dias de Menor Uso</h2>
      <div className="graph-graph">
        <BarGraph
          value={data}
          title={"Dias de menor uso y de no uso"}
          labels={label}
        />
      </div>
    </div>
  );
};
