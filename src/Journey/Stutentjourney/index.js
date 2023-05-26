import React from "react";
import {  Outlet } from "react-router-dom";
import Appheader from "../../Appheader/Appheader";
import AuthcontextProvider from "../../Context/Authcontext";
import './style/styles.css'

const route=[
    {
        id:'journey-1',
        label:'Createstudents',
        link: '/stutents/Create',
        
    },
    {
        id:'journey-2',
        label:'students Syllabus',
        link: '/stutents/Manage',
        
    }
]


export default function Index(){
    return(
        <>
                <div><Appheader journeyname="student Journey" route={route}/>
                
                <Outlet/>
                 </div>
              
        
            
       
        </>
              
     
    )
}