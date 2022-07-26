import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { createAnnonce } from '../api/annonce';
function Example({Pets,getAnimals}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler =  async(e) =>{
    e.preventDefault();
    
    await createAnnonce(Pets._id).then(navigate('/annonces'))
  
   }
  return (
    <>
      <Button variant="outline-success" style={{marginLeft:'1rem'}} onClick={handleShow}>
        Sale It
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>You really want to sale your pet!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" style={{marginLeft:'1rem'}} onClick={submitHandler}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example