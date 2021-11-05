import React from "react";
import { Line } from "react-chartjs-2";

export const LineGraph = ({ title, value, labels }) => {
  //['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: value,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'probability'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'hola'
        }
      }],
    }
  }

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};
