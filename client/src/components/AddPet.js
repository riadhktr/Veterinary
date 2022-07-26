import React,{useState} from 'react'
import { FormLabel ,Button} from 'react-bootstrap';

import { useNavigate,Link } from 'react-router-dom';
import {addPet} from '../api/pet'

const AddPet = () => {
    const [categorie , setCategorie] = useState('');
    const [type , setType] = useState('');
    const [birth, setBirth] = useState('');
    const [gender , setGender] = useState('');
    const [vaccinDate , setVaccinDate] = useState('');
    const [price , setPrice] = useState('');
    const [file,setFile] = useState(null);
    const navigate = useNavigate()   
      
   
const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('categorie',categorie);
    formData.append('type',type);
    formData.append('birth',birth);     
    formData.append('gender',gender);
    formData.append('price',price);
    formData.append('vaccinDate',vaccinDate); 
    let newArr = [];
    for (let i = 0; i < file.length; i++) {
      formData.append('multi-files', file[i]);
    }
    await addPet(formData).then(
      setCategorie(''),
        setType(''),
        setBirth(''),
        setGender(''),
        setPrice(''),
        setVaccinDate(''),
        setFile('')
    );

   navigate('/user/dashboard/')
}

const BackHome = ()=>{
  navigate('/user/dashboard/')
}

  return (
    <div >
    <div style={{display:'flex', flexDirection:'column',marginLeft:'40%', marginTop:'20px',marginBotton:'10%',width:'400px' }}>
    
   <FormLabel>Type</FormLabel>
  <select id="categorie" defaultValue="Select categorie"
              onChange={(e) => setCategorie(e.target.value)}>
                <option >select a categorie of pet</option>
        <option value="Dog">Dog</option>
        <option value="Cat">cat</option>
        <option value="Bird">Bird</option>
        
   </select>
     <br></br>
     <FormLabel>Type</FormLabel>
      < input
       type="text"
       value={type}
       onChange={(e)=>setType(e.target.value)}
       className='form-control'
       /><br></br>
    <FormLabel>Birth Date</FormLabel>
      < input
       type="date"
       value={birth}
       onChange={(e)=>setBirth(e.target.value)}
       className='form-control'
       /><br></br>
       <FormLabel>Gender</FormLabel>
       
       <div onChange={(e)=>setGender(e.target.value)}>
        <input type="radio" value="Male" name="gender" /> Male
        <br></br>
        <input type="radio" value="Female" name="gender" /> Female
        
      </div>
       
       <br></br>
       <FormLabel>Vaccin Date</FormLabel>
       < input
       type="date"
       name="vaccinDate"
       value={vaccinDate}
       onChange={(e)=>setVaccinDate(e.target.value)}
       
       className='form-control'
       />
       <br></br>
       <FormLabel>Price</FormLabel>
       < input
       type="number"
       name="price"
       value={price}
       onChange={(e)=>setPrice(e.target.value)}
       
       className='form-control'
       />
       <br></br>
       <FormLabel>Picture</FormLabel>
       < input
       type="file"
       name="multi-files"
       multiple
       className='form-control-file'
       onChange={(e) => setFile(e.target.files)}
       
       /> * select two pictures
       <br></br>
       <div>
       <Button style={{width:'100px',marginLeft:'10rem',marginBottom:'40px',marginTop:'40px',marginRight:'3rem'}}  variant="outline-success" onClick={handleSubmit}>Add</Button>
       <Button onClick={BackHome}> <i className='fas fa-home'></i></Button>
       </div>
     </div>
    </div>
  )
}

export default AddPet