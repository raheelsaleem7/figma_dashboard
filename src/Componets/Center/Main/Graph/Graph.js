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
   
      <div className='graph'>
         <div className='graph_header'>
            <div className='graph_title'>
             <h4>History</h4>
            </div>
            <div className='weight'>
              <button>Weight</button>
              <button>Weight</button>
              <button>Weight</button>
            </div>

            <div className='months'>
              <div className='time'>
             <span>3 months</span>
               </div>
               <div className='down'>
               <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2457 3.67004V3.17004V3.67004ZM21.2457 12.67H20.7457H21.2457ZM12.2457 21.67V21.17V21.67ZM3.24573 12.67H2.74573H3.24573ZM8.9995 11.146C8.80424 10.9508 8.48766 10.9508 8.29239 11.146C8.09713 11.3413 8.09713 11.6579 8.29239 11.8532L8.9995 11.146ZM12.2459 15.0996L11.8924 15.4532C12.0877 15.6484 12.4042 15.6484 12.5995 15.4532L12.2459 15.0996ZM16.1995 11.8532C16.3948 11.6579 16.3948 11.3413 16.1995 11.146C16.0042 10.9508 15.6877 10.9508 15.4924 11.146L16.1995 11.8532ZM12.2457 4.17004C16.9401 4.17004 20.7457 7.97562 20.7457 12.67H21.7457C21.7457 7.42334 17.4924 3.17004 12.2457 3.17004V4.17004ZM20.7457 12.67C20.7457 17.3645 16.9401 21.17 12.2457 21.17V22.17C17.4924 22.17 21.7457 17.9167 21.7457 12.67H20.7457ZM12.2457 21.17C7.55131 21.17 3.74573 17.3645 3.74573 12.67H2.74573C2.74573 17.9167 6.99902 22.17 12.2457 22.17V21.17ZM3.74573 12.67C3.74573 7.97562 7.55131 4.17004 12.2457 4.17004V3.17004C6.99902 3.17004 2.74573 7.42334 2.74573 12.67H3.74573ZM8.29239 11.8532L11.8924 15.4532L12.5995 14.746L8.9995 11.146L8.29239 11.8532ZM12.5995 15.4532L16.1995 11.8532L15.4924 11.146L11.8924 14.746L12.5995 15.4532Z" fill="white"/>
</svg>

               </div>
            </div>

       </div>
           <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
     
  );
}

export default Graph;
