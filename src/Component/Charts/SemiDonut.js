import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const SemiDonut = () => {
  const [chartOptions] = useState({
    title: {
      text: 'Semi Donut Chart',
      align: 'left',
    },
    labels: ['A', 'B', 'C', 'D', 'E'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  const [chartSeries] = useState([44, 55, 41, 17, 15]);

  return (
    <div className="donut">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="500"
      />
    </div>
  );
};

export default SemiDonut;
