import React, { useState,useRef } from "react";
import { useAuth } from "../../Context/Authcontext";
import './style/styles.css'


const studentdata=[
  {
    "id":"1",
    "name":"test",
    "email":"test@gmail.com",
    "phone":"1234567890"
  },  {
    "id":"2",
    "name":"test",
    "email":"test@gmail.com",
    "phone":"1234567890"
  },  {
    "id":"3",
    "name":"test",
    "email":"test@gmail.com",
    "phone":"1234567890"
  }
]


export default function Createstutents(){
  const [data,setdata]=useState(studentdata)
  const [edit,setedit]=useState(-1)
  return (
    <div className='tablewrap'>
      <div>
      <Addmember setdata={setdata}/>
      <form onSubmit={handleupdate}>
     <table>
       <thead>
         <th>Name</th>
         <th>Email</th>
         <th>Phone</th>
         <th>Action</th>
       </thead>
     {
        data.map((current)=>(
          edit === current.id ? <Editnumber current={current} data={data} setdata={setdata} /> :
          <tr>
            <td>{current.name}</td>
            <td>{current.email}</td>
            <td>{current.phone}</td>
            
            <td>
              <button  type="button" className="edit"  onClick={ ()=> handledit(current.id) } >Edit</button>
              <button  type="button" className="delete" onClick={()=> handledelete(current.id)}>Delete</button>
            </td>
          </tr>
        ))
      }
     </table>
     </form>
     </div>
    </div>
  );
   
  function handleupdate(e) {
    e.preventDefault()
     const name=e.target.elements.name.value
     const email=e.target.elements.email.value
     const phone=e.target.elements.phone.value

     const updatedata=data.map(d => d.id === edit ?{...d,name:name,email:email,phone:phone}:d)
     setedit(-1)
     setdata(updatedata)
  
     
  } 


   function handledit(id){
       setedit(id)
   } 

   function handledelete(id){
       const updatedata=data.filter((d) => id !== d.id )
       setdata(updatedata)
   }

}

function Editnumber({current,data,setdata}){
         function handlename(event){
           const name= event.target.value
           const update= data.map((d) => d.id === current.id ? {...d, name:name } : d )
           setdata(update)
         }
         function handlephone(event){
          const phone= event.target.value
          const update= data.map((d) => d.id === current.id ? {...d, phone:phone } : d )
          setdata(update)
        }
        function handleemail(event){
          const email= event.target.value
          const update= data.map((d) => d.id === current.id ? {...d, email:email } : d )
          setdata(update)
        }

  return(
    <tr>
        <td><input type="text" onChange={handlename}  value={current.name}  name="name" placeholder="Enter Name" /></td>
        <td><input type="email" onChange={handleemail} value={current.email} name="email" placeholder="Enter email"  /></td>
        <td><input type="number" onChange={handlephone} value={current.phone} name="phone" placeholder="Enter Phone"  /></td>
        <td><button type='submit' >Update</button></td>
    </tr>
  )
}


function Addmember({setdata}){
        const nameref=useRef()
        const emailref=useRef()
        const phoneref=useRef()
      
      function handlevalues(e){
      e.preventDefault()
      const name=e.target.elements.name.value
      const email=e.target.elements.email.value
      const phone=e.target.elements.phone.value
      
      const newmember = {
         id:4,
         name,
         email,
         phone
      }
      setdata(predata => predata.concat(newmember))
      nameref.current.value=""
      emailref.current.value=""
      phoneref.current.value=""
      }
  return(
    <form className='addform' onSubmit={handlevalues} >
      <input type="text" name="name" placeholder="Enter Name"  ref={nameref}  />
      <input type="text" name="email" placeholder="Enter email" ref={emailref} />
      <input type="text" name="phone" placeholder="Enter Phone" ref={phoneref} />
      <button >Submit</button>
    </form>
  )
}