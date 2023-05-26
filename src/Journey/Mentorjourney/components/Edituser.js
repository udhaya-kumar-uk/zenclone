import React,{useContext,useState,useEffect} from 'react'
import{useParams,Link,useNavigate} from 'react-router-dom'


import { Globalconext } from '../../../Context/Globalstate';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from'reactstrap'


export const Edituser=(props) => {
  const {users,edituser}=useContext(Globalconext)
  const [selectuser,setselectuser]=useState({id:"",name:""})
  const navigate=useNavigate();
   const current=props.match.params.id
  const {userid}=useParams()
  
  useEffect(() => {
   const userid=current
   const  selectuser=users.find(user => user.id===userid)
   setselectuser(selectuser)
  },current,[users])

  const onChange=(e)=>{
    setselectuser({[e.target.name]:e.target.value})
   }
  
  const onSubmit=(e)=>{
    e.preventDefault()
   edituser(selectuser)
   navigate('/mentor')
  }
 

  return (
    
    <Form onSubmit={onSubmit} > 
    <FormGroup>
        <Label>Name</Label>
        <Input type='text' name='name' value={selectuser.name} onChange={onChange} placeholder='Enter Your Name' >
        </Input>
    </FormGroup>
     <Button type='submit' >
        Edit Name
     </Button>
     <Link  to='/'  className='btn btn-danger ml-2'  >
        cancel
     </Link>
   </Form>
   
  )
}
