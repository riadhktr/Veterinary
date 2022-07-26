import React,{useEffect,useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Button} from 'react-bootstrap';
import {RemoveAnnonce} from '../api/annonce';
import { useNavigate } from 'react-router-dom';
import AnnonceDetail from './AnnonceDetails';

const AnnonceCard=({annonce,fetchAnnonce,account,getUser})=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


// console.log('annonce.animal',annonce.animal.categorie)
  const handelRemove = async()=>{

    await RemoveAnnonce(annonce._id);
    await fetchAnnonce();

    if(annonce.animal===null){
      await RemoveAnnonce(annonce._id);
    }
  }




  return (
    <>
    <div style={{marginLeft:'20%'}}>
      <div style={{ marginTop:'20px',width:'450px',backgroundColor:'white'}}>
      <h5>Created by <strong> {annonce.user.username}</strong>   At <strong> {annonce.createdAt.split('').splice(0,10)}</strong></h5>
      </div>
    <Carousel  activeIndex={index} onSelect={handleSelect} style={{ width:'75%'}} variant="dark">
      <Carousel.Item >

      <Carousel.Caption>
          <h3>{annonce.animal.type} </h3>
          <h2>{annonce.animal.price} TND</h2>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          height="350rem"
          src={annonce.animal.petPicture[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          height="350rem"
          src={annonce.animal.petPicture[1]}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{annonce.animal.type} </h3>
          <h2>{annonce.animal.price} TND</h2>
        </Carousel.Caption>
      </Carousel.Item>
      
      </Carousel>
      <div style={{display:'flex', marginRight:'35%',justifyContent:"flex-end" ,backgroundColor:'white', width:'43rem'}}>
      {(annonce.user._id === account._id) ?<Button onClick={handelRemove} style={{width:'10rem',marginTop:'1rem',backgroundColor:'transparent',border:'transparent',color:'black'}} ><i className='fas fa-trash '></i></Button> : null}
      <div style={{marginTop:'16px',marginLeft:'14rem'}}>
      <AnnonceDetail  annonce={annonce}/>
      </div>
      </div>
         </div>
    
         </>
  );
}

export default AnnonceCard;