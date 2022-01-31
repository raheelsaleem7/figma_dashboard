import React from 'react';
import ReactApexChart from 'react-apexcharts'
import './Graph.scss'

function Graph() {
   const series = [
      {
        name: 'series1',
        data: [63, 62.88, 62.92]
      }, 
      ]
     const options = {
        chart: {
          height: 350,
          type: 'area',
          
        
        },
        colors: ['#6556D9'],
        dataLabels: {
          enabled: false,
        
        },
        stroke: {
          curve: 'smooth',
          colors:['#6556D9'],
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z"],
          
          labels: {
            style: {
              colors: 'black',
              background:'black'
            },

        },
      },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
           
          },
        },
      }
    
  return ( 
      <div>
           <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
    
  );
}

export default Graph;
