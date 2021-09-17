import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { getAnalyzed } from "../../../helpers/servicesAPI";
import moment from "moment";

export const PieMayorUso = () => {
  const [value, setValue] = useState("");
  const [labels, setLabel] = useState("");

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

      setValue(array);
      setLabel(arrayLabel);
    }
    fetch();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      
      title: {
        display: true,
        text: "Dis de mayor uso",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <Pie data={data} options={options}/>
    </>
  );
};
