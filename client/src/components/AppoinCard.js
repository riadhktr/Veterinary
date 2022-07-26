import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AppoinementCard = ({Appoinement}) => {
  return (
    <Card className="text-center" style={{width:'20rem'}}>
    <Card.Header>Appoinement </Card.Header>
    {(Appoinement.status==='unconfirmed')? <h4 style={{color:'red'}}>{Appoinement.status}</h4> :<div><h4 style={{color:'green'}}>{`${Appoinement.status} `}</h4> <h4>By</h4></div>}
    <Card.Body>
      
      <Card.Title>{Appoinement.to.firstName} {Appoinement.to.lastName}</Card.Title>
      <Card.Title>{Appoinement.body.split('').splice(0,10)} </Card.Title>
      
    </Card.Body>
    <Card.Footer className="text-muted"> <strong>Created at</strong> {Appoinement.createdAt.split('').splice(0,10)}</Card.Footer>
  </Card>
  )
}

export default AppoinementCard