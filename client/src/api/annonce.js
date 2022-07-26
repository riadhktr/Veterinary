import axios from 'axios'
import { getCookie } from '../components/helpers/cookies';


export const createAnnonce =async(id)=>{
    
    const token = getCookie('token');
    

    return axios({
        method: 'post',
        url: `${process.env.REACT_APP_URL}/api/annonce/${id}`,
        headers: { 'Authorization': token}
    })


}

export const getAnnonce =async()=>{
    
    const token=getCookie('token');
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/annonce/all`,{headers:{Authorization:token}} );
    return data 
    
}

export const RemoveAnnonce =async(id)=>{
    
    const token=getCookie('token');
    await axios.delete(`${process.env.REACT_APP_URL}/api/annonce/${id}`,{headers:{Authorization:token}} );
    
}

export const annonceDetails =async(id)=>{
    
    const token=getCookie('token');
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/annonce/${id}`,{headers:{Authorization:token}} );
    return data 
}





