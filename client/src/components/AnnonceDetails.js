import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AnnonceDetail=({annonce})=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={{backgroundColor:'transparent',border:'transparent',color:'black'}} onClick={handleShow}>
       <strong>More details..</strong>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Annonce details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <h5> <strong>Owner :</strong>{annonce.user.lastName} {annonce.user.firstName}</h5>
           <h5><strong>Pet :</strong>{annonce.animal.type}</h5>
           <h5><strong>Birth :</strong> {annonce.animal.birth.split('').splice(0,10)}</h5>
           <h5><strong>Price :</strong>{annonce.animal.price} TND</h5>
           <h5><strong>Phone Number :</strong>{annonce.user.phone}</h5>
           <h5><strong>Adress:</strong>{annonce.user.adresse}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AnnonceDetail