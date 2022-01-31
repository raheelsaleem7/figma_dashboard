import React ,{useState} from 'react';
import Main from '../Center/Main/Main';
import RightBar from '../RightBar/RightBar';
import SideBar from '../SideBar/SideBar';
import './_Dashboard.scss'

function Dashboard() {
    const [toggleState, setToggleState] = useState (false);
   
    const toggleStep = (index) => {
        if(toggleState) {
            setToggleState(false)
        } else {
            setToggleState(true)
        }
    }
    
    function getData () {
        alert ("")
    }
  return (
     <div className='dashboard'>
 <div className='header'>
     <div className='for_ham'>
         <div className='hamburgur' onClick= {() => toggleStep() }>
          <span></span>
          <span></span>
          <span></span>
          </div>
         
      </div>
  
  <div className='for_clock'>
          <div className='clock'  onClick= {() => toggleStep() }>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
          </div>
          <div className ={toggleState  ? "active-steps" : "not-active"} > 
              <RightBar  data={ getData}  />
          </div>
        </div>
       </div>
        <div className='all_component'>
        <div className ={toggleState ? "active-steps" : "not-active"} > 
              <SideBar  data={ getData}  />
          </div>
   <Main />
   <RightBar />
   </div>

     </div>
  );
}

export default Dashboard;
