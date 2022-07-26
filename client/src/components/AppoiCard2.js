import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { updateAppoinement, updateDone,deleteAppoinement} from '../api/appoinement';

const AppoinementVet = ({Appoinement,fetchAppoinement}) => {
   
   
    
    const handelSubmit = async()=>{
      
      await updateAppoinement(Appoinement._id);
    }
    const doneStatus = async(e) =>{
      // e.preventDefault()
      await updateDone(Appoinement._id);
       alert('sucessful appoinement :) ')
      if(Appoinement.done === 'done'){
        await deleteAppoinement(Appoinement._id);
        fetchAppoinement()
       
      }
    }
    useEffect(()=>{
      fetchAppoinement();
     
     },[Appoinement])

  return (
    
    <Card className="text-center" style={{width:'20rem'}}>
    <Card.Header>Appoinement 
      {(Appoinement.done === 'coming') ?<Button style={{backgroundColor:'transparent',border:'transparent',color:'red'}} onClick={doneStatus}> <i className="fas fa-clipboard-check"></i>{Appoinement.done}</Button>
: <Button style={{backgroundColor:'transparent',border:'transparent',color:'green'}} onClick={doneStatus}> <i className="fas fa-clipboard-check"></i>{Appoinement.done}</Button>}    
    
    </Card.Header>
     {(Appoinement.status==='unconfirmed')? <h4 style={{color:'red'}}>{Appoinement.status}</h4> :<h4 style={{color:'green'}}>{Appoinement.status}</h4>}
   
    <Card.Body>
      <Card.Title>{Appoinement.from.firstName} {Appoinement.from.lastName}</Card.Title>
      <Card.Title>{Appoinement.body.split('').splice(0,10)} </Card.Title>
      <h1>{Appoinement.done}</h1>
      <Button variant="primary" onClick={handelSubmit}>Confirm</Button>
    </Card.Body>
    <Card.Footer className="text-muted"> <strong>Created at</strong> {Appoinement.createdAt.split('').splice(0,10)}</Card.Footer>
  </Card>
  )
}

export default AppoinementVet