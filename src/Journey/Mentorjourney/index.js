import React from "react";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import {Routes,Route} from 'react-router-dom'
import 'bootstrap'
import { Outlet } from "react-router-dom";
import Appheader from "../../Appheader/Appheader";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Globalprovider } from "../../Context/Globalstate";

const route=[
    {
       
        link: '/mentor/add',
        
    },
    {
      
        link: '/mentor/edit',
        
    }
]

export default function Index(){


    return(
        <div style={{maxWidth:'30rem' , margin:"4rem auto"}} >
               

               <Globalprovider>
               <div><Appheader  route={route}/>
                
                <Outlet/>
                 </div>
              <Routes>   
              <Route  path='/' Component={Home}/>
              </Routes>
               </Globalprovider>
            
        </div>
       
    )
}