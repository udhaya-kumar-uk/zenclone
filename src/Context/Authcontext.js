import React, {createContext, useContext, useState}  from "react";

const Authcontext=createContext({
     Name:null,
     email:null,
     role:null,
     course:null,
     city:null,
     state:null,
     greet:()=>{},
     handlechange:(e)=>{},
});

export const useAuth=()=> useContext(Authcontext);

export default function AuthcontextProvider({children}){
    const[userdata,Setuserdata]=useState({
        Name:'Udhayakumar',
        email:'uk@gmail.com',
        role:'Student',
        course:'FSD',
    })
    const value={
       ...userdata,
  
        greet:greet,
        handlechange:handlechange,
    };

    function greet(){
        console.log('context api')
    }
    
 function handlechange(e){
    const{id,value}=e.target
    const datacopy={...userdata}
    datacopy[id]=value
    Setuserdata(datacopy)
 }

    return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
      
}
 