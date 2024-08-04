import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const [chartOptions] = useState({
    chart: {
      height: 200,
      type: 'line',
    },
    title: {
      text: 'Line Chart by Month',
      align: 'left'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  });

  const [chartSeries] = useState([{
    name: 'Datas',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart 
          options={chartOptions} 
          series={chartSeries} 
          type="line" 
          height={350} 
        />
      </div>
      {/* <div id="html-dist"></div> */}
    </div>
  );
};

export default LineChart;
