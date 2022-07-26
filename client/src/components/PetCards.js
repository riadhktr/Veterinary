import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletePet } from '../api/pet';
import { createAnnonce } from '../api/annonce';
import { useNavigate } from 'react-router-dom';
import Example from './SalesConfirm';
import UpdatePet from './updatePet';

const PetCards = ({Pets,getAnimals}) => {
  const navigate = useNavigate();
  const deleteHandler = async()=>{
    await deletePet(Pets._id);
    getAnimals();
    }


  return (
    <div >
     
    <Card  style={{  display:'flex',flexDirection:'row',marginRight:'16rem'}} >
      <div>
      <Card.Img variant="top" src={`${Pets.petPicture[1]}`} style={{ height: '18rem',width:'20rem'}} />
      </div>
      
      <Card.Body style={{ width:'19rem'}} >
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <Card.Title>{Pets.type}</Card.Title>
      <UpdatePet Pets ={Pets} getAnimals={getAnimals}/>
      </div>
        <Card.Text>
        <strong>Gender :</strong> {Pets.gender}
        </Card.Text>
        <Card.Text>
        <strong>Birth :</strong> {Pets.birth.split('').splice(0,10)}
        </Card.Text>
        <Card.Text>
        <strong>Vaccine Date:</strong> {Pets.vaccinDate.split('').splice(0,10)}
        </Card.Text>
        <Card.Text>
        <strong>Price:</strong> {Pets.price} TND
        </Card.Text>
        <Button variant="outline-success" onClick={deleteHandler}>Delete</Button>
        
      <Example Pets ={Pets} getAnimals={getAnimals}/>
      
      </Card.Body>
      
    </Card>
    </div>
  )
}

export default PetCards



