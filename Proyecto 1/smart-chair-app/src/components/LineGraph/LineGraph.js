import React from 'react'
import { Line } from 'react-chartjs-2';

const LineGraph = ({title, value}) => {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',],
        datasets: [
            {   
                label: title,
                data: value,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
};

export default LineGraph;
