import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom'
import { updatePet } from '../api/pet';

const UpdatePet=({Pets, getAnimals})=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newForm,setNewForm] = useState({
    
    
    price:'',
    vaccinDate:''
    
  })
  const {price,vaccinDate} = newForm;
const navigate =  useNavigate()
  const handleChange = (e)=>{

    setNewForm({
    ...newForm, 
    [ e.target.name]: e.target.value
    })
    // console.log(newForm)
  }

  const PetUpdated = async()=>{
   await updatePet(Pets._id,newForm).then(
    setNewForm({
      price:'',
      vaccinDate:''
    })
   )
   navigate('/annonces')
  }
  // useEffect(()=>{
  //   updatePet();
    
  // },[])

  return (
    <>
      <Button style={{border:'none',backgroundColor:"transparent",color:'black'}}  onClick={handleShow}><i className='fas fa-pen'></i>
        
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Vaccin Day</Form.Label>
              <Form.Control
                type="date"
                name="vaccinDate"
                value={vaccinDate}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={PetUpdated}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdatePet