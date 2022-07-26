import React from 'react'
import { Button} from 'react-bootstrap';
import {deleteUser} from '../api/userApi';
import './css/userCard.css';
import Table from 'react-bootstrap/Table';


const UserCard = ({users , getAccount}) => {
    
    const deleteHandler = async()=>{
    await deleteUser(users._id);
    getAccount();
    }
    
  return (
   
    <Table striped bordered hover variant="dark">
      <thead style={{textAlign:'center'}}>
        <tr >
          
          <th width='100px'>Full Name</th>
          <th width='100px'>Email</th>
          <th width='100px'>Phone</th>
          <th width='100px'>Adress</th>
          <th width='100px'>Role</th>
          <th width='100px'>Supprimer</th>
        </tr>
      </thead>
      <tbody  style={{textAlign:'center'}} >
        <tr >
          <td  width='100px'>{users.lastName} {users.firstName}</td>
          <td width='100px'>{users.email}</td>
          <td width='100px'>{users.phone} </td>
          <td width='100px'>{users.adresse}</td>
          <td width='100px'>{users.role}</td>
          <td width='100px'>  <Button onClick={deleteHandler}>Supprimer</Button></td>
        </tr>
        
      </tbody>
    </Table>
  


    

  )
}

export default UserCard;