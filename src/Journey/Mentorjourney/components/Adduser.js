import React,{useContext,useState} from 'react'
import { Globalconext } from '../../../Context/Globalstate';
import {useNavigate} from 'react-router-dom' 
import { v4 as uuid } from 'uuid';
import {
    Form, 
    FormGroup,
    Label,
    Input,
    Button
} from'reactstrap'
import {  Link, Outlet } from "react-router-dom";

export default function Adduser() {
  
  const [name,setname]=useState('')
  const {adduser}=useContext(Globalconext)
  const navigate=useNavigate();
  const onSubmit=()=>{
    const user={
      id:uuid(),
      name
    }
    adduser(user)
   navigate('/mentor')
  }
  const onChange=(e)=>{
    setname(e.target.value)
  }

  return (
    <Form onSubmit={onSubmit} >
    <FormGroup>
        <Label>Name</Label>
        <Input type='text'  value={name} onChange={onChange} placeholder='Enter Your Name' >
        </Input>
    </FormGroup>
     <Button type='submit' >
        Submit
     </Button>
     <Link  to='/'  className='btn btn-danger ml-2'  >
        cancel
     </Link>
     
   </Form>
   
  )
}
