import React from 'react';
import "./_Main.scss"
import avatar from '../../../images/avatar.png'
import friend1 from '../../../images/avatar_friends.png'
import friend2 from '../../../images/ava2.png'
import friend3 from '../../../images/avt3.png'
import graph from '../../../images/cards.png'
import RightBar from '../../RightBar/RightBar'
import Graph from '../Main/Graph/Graph'
import friend5 from '../../../images/avt5.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
function Main() {

  const data1 = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [58, 42],    
        backgroundColor: [
          '#F53126',
          '#FCCBC9',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          '#F53126',
        ],
        borderColor: [
          '#F53126',
          '#FCCBC9',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          '#F53126',
        ],
       
        maxBarThickness: 120,
        cutout: 35,
            },
            
    ],
    
  };
  const data2= {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [93, 7],    
        backgroundColor: [
          '#1CC336',
          '#C6F0CD',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          '#1CC336',
        ],
        borderColor: [
          '#1CC336',
          '#C6F0CD',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          '#1CC336',
        ],
       
        maxBarThickness: 120,
        cutout: 35,
            },
            
    ],
  };
  const data3 = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [85, 15],    
        backgroundColor: [
          '#0070F5',
          '#BFDBFC',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          '#0070F5',
        ],
        borderColor: [
          '#0070F5',
          '#BFDBFC',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          '#0070F5',
        ],
       
        maxBarThickness: 120,
        cutout: 35,
            },
            
    ],
  };
  return (
     <div className='main'>
       <div className='main-container'>
         <div className='center_div'>
         <div className='main-content'>
         <div className='main-top'>
          <div className="top-content">
            <div className='for_image'>
              <img src={avatar} />
          </div>
                
                <div className="description">
               <p>Tooltip</p>
               <h4>John Doe</h4>
               <span>ID:785358</span>
             
             </div>
                </div>

              <div className='weight-btn'>
                 <button>169 CM</button>
                 <button>28 KG</button>
                 <button>61 NM</button>
                 <button>...</button>
                </div>  

                <div className='select'>
                  <div className='for_svg'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 4.17007L11.9999 3.67007L11.9999 4.17007ZM20.9999 13.1701L20.4999 13.1701L20.9999 13.1701ZM11.9999 22.1701L11.9999 21.6701L11.9999 22.1701ZM2.99994 13.1701L2.49994 13.1701L2.99994 13.1701ZM8.75371 11.6461C8.55845 11.4508 8.24187 11.4508 8.0466 11.6461C7.85134 11.8413 7.85134 12.1579 8.0466 12.3532L8.75371 11.6461ZM12.0002 15.5996L11.6466 15.9532C11.8419 16.1484 12.1584 16.1484 12.3537 15.9532L12.0002 15.5996ZM15.9537 12.3532C16.149 12.1579 16.149 11.8413 15.9537 11.6461C15.7584 11.4508 15.4419 11.4508 15.2466 11.6461L15.9537 12.3532ZM11.9999 4.67007C16.6944 4.67008 20.4999 8.47566 20.4999 13.1701L21.4999 13.1701C21.4999 7.92337 17.2466 3.67008 11.9999 3.67007L11.9999 4.67007ZM20.4999 13.1701C20.4999 17.8645 16.6944 21.6701 11.9999 21.6701L11.9999 22.6701C17.2466 22.6701 21.4999 18.4168 21.4999 13.1701L20.4999 13.1701ZM11.9999 21.6701C7.30552 21.6701 3.49994 17.8645 3.49994 13.1701L2.49994 13.1701C2.49994 18.4168 6.75323 22.6701 11.9999 22.6701L11.9999 21.6701ZM3.49994 13.1701C3.49994 8.47566 7.30552 4.67007 11.9999 4.67007L11.9999 3.67007C6.75323 3.67007 2.49994 7.92337 2.49994 13.1701L3.49994 13.1701ZM8.0466 12.3532L11.6466 15.9532L12.3537 15.2461L8.75371 11.6461L8.0466 12.3532ZM12.3537 15.9532L15.9537 12.3532L15.2466 11.6461L11.6466 15.2461L12.3537 15.9532Z" fill="#6556D9"/></svg>
                    </div>

                <div className='text'>
                   <p>Select Element</p>
                </div>
                 
                 <div className='for_span'>
                <span>15:24</span>
                  </div>
                  
                </div>
         </div>

         <div className='main-top'>
          <div className="top-content">
           
           <div className='friends'>
              <div className='friends-name'>
                  <h4>Friends</h4>
              </div>
              <div className='for_svg'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.67004 12.0001L3.17004 12.0001L3.67004 12.0001ZM12.67 3.00006L12.67 3.50006L12.67 3.00006ZM21.67 12.0001L21.17 12.0001L21.67 12.0001ZM12.67 21.0001L12.67 21.5001L12.67 21.0001ZM11.146 15.2463C10.9508 15.4416 10.9508 15.7581 11.146 15.9534C11.3413 16.1487 11.6579 16.1487 11.8532 15.9534L11.146 15.2463ZM15.0996 11.9998L15.4532 12.3534C15.6484 12.1581 15.6484 11.8416 15.4532 11.6463L15.0996 11.9998ZM11.8532 8.04629C11.6579 7.85103 11.3413 7.85103 11.146 8.04629C10.9508 8.24155 10.9508 8.55813 11.146 8.7534L11.8532 8.04629ZM4.17004 12.0001C4.17004 7.30564 7.97562 3.50006 12.67 3.50006L12.67 2.50006C7.42334 2.50006 3.17004 6.75336 3.17004 12.0001L4.17004 12.0001ZM12.67 3.50006C17.3645 3.50006 21.17 7.30564 21.17 12.0001L22.17 12.0001C22.17 6.75336 17.9167 2.50006 12.67 2.50006L12.67 3.50006ZM21.17 12.0001C21.17 16.6945 17.3645 20.5001 12.67 20.5001L12.67 21.5001C17.9167 21.5001 22.17 17.2468 22.17 12.0001L21.17 12.0001ZM12.67 20.5001C7.97562 20.5001 4.17004 16.6945 4.17004 12.0001L3.17004 12.0001C3.17004 17.2468 7.42334 21.5001 12.67 21.5001L12.67 20.5001ZM11.8532 15.9534L15.4532 12.3534L14.746 11.6463L11.146 15.2463L11.8532 15.9534ZM15.4532 11.6463L11.8532 8.04629L11.146 8.7534L14.746 12.3534L15.4532 11.6463Z" fill="#6556D9"/>
              </svg>
              </div>
           </div>
         </div>

           <div className='friends-list'>

             <div className='info'> 
              <div className='friend_pic'>
                <img src={friend1} />
              </div>
              <div className='friend_name'>
              <h4>Nastya Zh.</h4>
              </div>
             </div>

             <div className='info'> 
              <div className='friend_pic'>
                <img src={friend5} />
              </div>
              <div className='friend_name'>
              <h4>Daria D.</h4>
              </div>
             </div>
             <div className='info'> 
              <div className='friend_pic'>
                <img src={friend2} />
              </div>
              <div className='friend_name'>
              <h4>Nina E.</h4>
              </div>
             </div>

             <div className='info'> 
              <div className='friend_pic'>
                <img src={friend3} />
              </div>
              <div className='friend_name'>
              <h4>Inna S.</h4>
              </div>
             </div>

             <div className='info'> 
              <div className='friend_pic'>
                <img src={friend5} />
              </div>
              <div className='friend_name'>
              <h4>Alexandra B.</h4>
              </div>
             </div>

           </div>
           <div className='select'>

             <div className='start-text'>
              <p>Ira G.</p>
             </div>
                  
                <div className='text'>
                   <p>Finished strength training</p>
                </div>
                 
                 <div className='for_span'>
                <p>08:01</p>
                  </div>
                  
                </div>

                <div className='select'>

<div className='start-text'>
<p>Nastya Zh.</p>
</div>
     
   <div className='text'>
   <p>Started a yoga class</p>
   </div>
    
    <div className='for_span'>
   <p>07:59</p>
     </div>
     
   </div>

   <div className='select'>

<div className='start-text'>
<p>Lisa H.</p>
</div>
     
   <div className='text'>
   <p>Started water aerobics</p>
   </div>
    
    <div className='for_span'>
   <p>07:37</p>
     </div>
     
   </div>
               
         </div>



        </div>

        <div className='card_group'>
        <div className='for_charts'>
        <div className='chart'>
         <div className='percentage'>
          <p>58%</p>
        </div>
        <Doughnut data={data1} />
        <h4>Dream</h4>
        <time>5 / 8h</time>
        </div>
        <div className='chart'>
        <div className='percentage'>
          <span>93%</span>
        </div>
        <Doughnut data={data2} />
        <h4>Steps</h4>
        <time>9035/10000</time>
        </div>
        <div className='chart'>
        <div className='percentage'>
          <h6>85%</h6>
        </div>
        <Doughnut data={data3} />
        <h4>Calories</h4>
        <time>577/850</time>
        </div>
        </div>
           
           <div className='elements'>
      <div className='element_content'>
            <div className='active_head'>
              <div className='element_title'>
             <h3>Activity</h3>
               </div>
               <div className='for_svg'>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.67004 12.0001L3.17004 12.0001L3.67004 12.0001ZM12.67 3.00006L12.67 3.50006L12.67 3.00006ZM21.67 12.0001L21.17 12.0001L21.67 12.0001ZM12.67 21.0001L12.67 21.5001L12.67 21.0001ZM11.146 15.2463C10.9508 15.4416 10.9508 15.7581 11.146 15.9534C11.3413 16.1487 11.6579 16.1487 11.8532 15.9534L11.146 15.2463ZM15.0996 11.9998L15.4532 12.3534C15.6484 12.1581 15.6484 11.8416 15.4532 11.6463L15.0996 11.9998ZM11.8532 8.04629C11.6579 7.85103 11.3413 7.85103 11.146 8.04629C10.9508 8.24155 10.9508 8.55813 11.146 8.7534L11.8532 8.04629ZM4.17004 12.0001C4.17004 7.30564 7.97562 3.50006 12.67 3.50006L12.67 2.50006C7.42334 2.50006 3.17004 6.75336 3.17004 12.0001L4.17004 12.0001ZM12.67 3.50006C17.3645 3.50006 21.17 7.30564 21.17 12.0001L22.17 12.0001C22.17 6.75336 17.9167 2.50006 12.67 2.50006L12.67 3.50006ZM21.17 12.0001C21.17 16.6945 17.3645 20.5001 12.67 20.5001L12.67 21.5001C17.9167 21.5001 22.17 17.2468 22.17 12.0001L21.17 12.0001ZM12.67 20.5001C7.97562 20.5001 4.17004 16.6945 4.17004 12.0001L3.17004 12.0001C3.17004 17.2468 7.42334 21.5001 12.67 21.5001L12.67 20.5001ZM11.8532 15.9534L15.4532 12.3534L14.746 11.6463L11.146 15.2463L11.8532 15.9534ZM15.4532 11.6463L11.8532 8.04629L11.146 8.7534L14.746 12.3534L15.4532 11.6463Z" fill="#6556D9"/></svg>
               </div>
            </div>
            <time>03.01.21 12:47-14:01</time>
               
               <div className='venue'>
                 <h4>Sokolniki Park</h4>
                 <span>Jogging <strong> 15 km </strong></span>
                 <span>Steps  <strong> 7523 </strong></span>
                 <span>Calories  <strong> 524</strong></span>
               </div>

           </div>
           <div className='calender_image'>
              <img src={graph} />
           </div>
       </div>
           </div>



    
      <div>
     <Graph />
      </div>
      </div>
           
       </div>
     </div>
     
  );
}

export default Main;
