import axios from 'axios'
import { getCookie } from '../components/helpers/cookies';
import { getLocalStorage } from '../components/helpers/localStorage';


export const addPet =async(newPet)=>{
  
    const token=getCookie('token');
    //const user = getLocalStorage('user')
    const config = {
        headers:{
            'Content-Type': 'multipart/form-data',
            Authorization : token
        }
    }
    
    const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/pets`,newPet,config);
    
    return data 
}

export const getPets =async()=>{
    const token=getCookie('token');
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/pets`,{headers:{Authorization:token}});
    return data 
}

export const deletePet =async(id)=>{
    const token=getCookie('token');
    const {data} = await axios.delete(`${process.env.REACT_APP_URL}/api/pets/${id}`,{headers:{Authorization:token}} );
   
}

export const updatePet =async(id,newData)=>{
    const token=getCookie('token');
    const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/pets/${id}`,newData,{headers:{Authorization:token}} );
   
}