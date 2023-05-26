import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";

export default function Appheader ({journeyname="",route=[]}) {

  const {Name='',email='',role='',course='',greet=()=>{}}=useAuth()
 

      return(
        <div id="headers" className='zenheader'>        
        <h2>{journeyname}</h2>
        <div className="linkcontainer">
          {route && route.map((element,index) =>
            <Link key={`studentjourney${index}`} to={element.link}> 
            <p className="paralink">{element.label}</p>
            </Link>
          )}
             {Name && <div className="profile">
              {Name[0]}
              </div>}
             
        </div>
   </div> 
    )
}



/**/