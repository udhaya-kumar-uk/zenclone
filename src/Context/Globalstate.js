import React ,{createContext,useReducer} from 'react'
import Appreducer from './Appreducer'

const initialstae={
    users:[
       
    ]
}

export const Globalconext=createContext(initialstae);

export const Globalprovider=({children})=>{
    const[state,dispatch]=useReducer(Appreducer,initialstae)

    const deleteuser=(id)=>{
       dispatch({
        type:'Remove-user',
        payload: id
       })
    }

    const adduser=(user)=>{
        dispatch({
         type:'add-user',
         payload: user
        })
     }

     const edituser=(user)=>{
        dispatch({
         type:'edit-user',
         payload: user
        })
     }

    return(
        <Globalconext.Provider value={{users:state.users,deleteuser,edituser,adduser}} >
            {children}
        </Globalconext.Provider>
    )
}


