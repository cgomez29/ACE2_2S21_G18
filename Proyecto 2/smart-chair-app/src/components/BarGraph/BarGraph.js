import React from "react";
import { Bar } from "react-chartjs-2";

const BarGraph = ({ title, value, labels, media = 0 }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: media === 0 ? '' : `Media: ${media}h`,
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        fill: false,
        data: media === 0 ? [] : [media, media, media, media, media, media, media],
      },
      {
        type: 'bar',
        label: '',
        data: value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: title,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarGraph;
