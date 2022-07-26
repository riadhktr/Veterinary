import React ,{useEffect,useState} from 'react'
import PetCards from './PetCards'
import { getPets } from '../api/pet'
import {Link} from 'react-router-dom'

const PetList = () => {

 
const [pet,setPet] = useState([])
    const getAnimals = async()=>{

      const data = await getPets();
      
       setPet(data.myPet);
       console.log('data',data)
  
      
     }
    
    useEffect(()=>{
    getAnimals()
   },[])

  return (
    <>
    < Link as ={Link} to ='/user/dashboard' 
   className="btn btn-outline-primary ms-1" style={{ marginTop:'2rem',marginRight:'200px'}}><i className='fas fa-home'></i>
   </Link>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center' ,marginBottom:'10px',position:'initial'}}>
   
     
   { (pet.length === 0 )? <h1>Empty list</h1>:
     pet.map((el,key)=>(<PetCards  Pets={el} key={el._id} getAnimals={getAnimals}/>))
  }
    </div>
    </>
  )
}

export default PetList