import React,{useContext} from 'react'
import { ListGroup,ListGroupItem,Button } from 'reactstrap'
import { Globalconext } from '../../../Context/Globalstate'
export default function Userlist() {
const {users,deleteuser}=useContext(Globalconext)
  return (

        <ListGroup className='mb-4'>
          {users.length > 0 ?(
            <>
              {users.map(user=>(
            <ListGroupItem className='d-flex' >
            <strong>{user.name}</strong>
            <div className='ml-auto'>
                {/* <Link className='btn btn-warning' to={`edit/${user.id}`} > Edit</Link> */}
                <Button onClick={()=>deleteuser(user.id)} color='danger' >Delete</Button>
            </div>
        </ListGroupItem>
        ))}
            
            </>
          ):(<h4>No Users Found</h4> )}

      
        </ListGroup>
     
  )
}
