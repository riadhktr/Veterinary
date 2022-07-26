import axios from 'axios'
import { getCookie } from '../components/helpers/cookies';
import { getLocalStorage } from '../components/helpers/localStorage';

export const getUsers =async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/account/user`);
    return data 
}

export const deleteUser = async(id)=>{
    await axios.delete(`${process.env.REACT_APP_URL}/account/user/${id}`);
    
}

export const fetchAccount =async()=>{
   
    const token=getCookie('token');
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/auth/profile`,{headers:{Authorization:token}} );
   // console.log(data)
    return data 

}

export const getveterinaires =async()=>{
    const token=getCookie('token');
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/account/user/vet`,{headers:{Authorization:token}});
    return data 
}

export const updateProfile =async(newData)=>{
    const token=getCookie('token');
    const user = getLocalStorage('user')
    const {data} = await axios.put(`${process.env.REACT_APP_URL}/account/user/${user._id}`,newData,{headers:{Authorization:token}});
    return data 
}

export const updatePicture =async(newPicture)=>{
  
    const token=getCookie('token');
    const user = getLocalStorage('user')
    const config = {
        headers:{
            'Content-Type': 'multipart/form-data',
            Authorization : token
        }
    }
    
    const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/auth/pic/${user._id}`,newPicture,config);
    
    return data 
}