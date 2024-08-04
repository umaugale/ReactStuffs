import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const [chartOptions] = useState({
    title: {
        text: 'Donut Chart',
        align: 'left'
      },
    labels: ['A', 'B', 'C', 'D', 'E']
  });
  
  const [chartSeries] = useState([44, 55, 41, 17, 15]);

  return (
    <div className="donut">
      <Chart 
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DonutChart;
