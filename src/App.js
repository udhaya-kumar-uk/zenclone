
import './App.css';
import {Routes,Route, Link} from 'react-router-dom'
import Createstutents from './Journey/Stutentjourney/Createsutents';
import Managestutents from './Journey/Stutentjourney/Managestutenst';
import Stutentjourney from './Journey/Stutentjourney'
import Mentorjourney from './Journey/Mentorjourney/index';
import Session from './Journey/Sessionjourney/Session';
import mentors from './Journey/Mentorjourney/index'
import { useAuth } from './Context/Authcontext';
import Adduser from './Journey/Mentorjourney/components/Adduser';



function App() {
  const{role='mentor'}=useAuth()
  return (
    <div id="zenclass" className="zenclass">
       
     
    <div id='contentcontainer' className='contentcontainer'>
      
       <div id='sidebar' className='sidebar'> 
      <div className='branding'>
      <img 
          id="zenlogo"
          className='zenlogo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6N7vPdnnaAP3EwZWscwG-JqEz1iX-gpTSR0QjHw5jA&s'
          alt="zenlogo"/>
          <h3>zenclass clone</h3>
      </div>
        <nav className='zennav'>
        <ul>
       

          <li><img className='img'  
          src='https://image.shutterstock.com/image-vector/student-icon-260nw-432236626.jpg' alt='#' />
          <Link to={'/stutents'}> Student Journey</Link></li>

    
          <li> <img className='img' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQQhTIbQlmM2TX7ZO6isYYpdXnX9yxvbxLOHAvM5-QEX9rN-Q3Ijgwh2SLOfXZJG9RQM&usqp=CAU' alt='#'/>
           <Link to={'/session'} >Session Journey </Link> 
          </li>
          <li><img className='img'  
          src='https://image.shutterstock.com/image-vector/student-icon-260nw-432236626.jpg' alt='#' />
          <Link to='/mentor' exact > Mentor Journey</Link></li>
          
        </ul>
        </nav> 
       </div>
       

       
      <div id='contentarea' className='contentarea'>
      
        <Routes>
        <Route path='stutents' Component={Stutentjourney}>
          <Route path='Create' Component={Createstutents}/>
           <Route path='Manage' Component={Managestutents}/> 
          </Route>
        {role==='Mentor' && <Route path='/' Component={Mentorjourney} />}
          
         </Routes>

       <Routes>
        <Route path='session' Component={Session} ></Route>
       </Routes>
        
       <Routes>
        <Route path='mentor' Component={mentors} >
      
        <Route path='add' Component={Adduser}/>
        </Route>

       </Routes>
      </div>
      
    </div>
    </div>
  );
}

export default App;



