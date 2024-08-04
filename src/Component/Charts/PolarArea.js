import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const PolarArea = () => {
  const [chartOptions] = useState({
    title: {
        text: 'Palar Area',
        align: 'left'
      },
    labels: ['A', 'B', 'C', 'D', 'E']
  });
  
  const [chartSeries] = useState([44, 55, 41, 17, 15]);

  return (
    <div className="polarArea">
      <Chart 
        options={chartOptions}
        series={chartSeries}
        type="polarArea"
        width="380"
      />
    </div>
  );
};

export default PolarArea;
