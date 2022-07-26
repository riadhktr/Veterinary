import axios from 'axios'
import { getCookie } from '../components/helpers/cookies';


export const AddComment =async(blogData)=>{
    
    const token=getCookie('token');
    const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/blogs`,blogData,{headers:{Authorization:token}} );
    return data 
}

export const getComments =async()=>{
    const token=getCookie('token');
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/blogs`,{headers:{Authorization:token}} );
    return data 
}
export const deleteComment =async(id)=>{
    const token=getCookie('token');
    const {data} = await axios.delete(`${process.env.REACT_APP_URL}/api/blogs/${id}`,{headers:{Authorization:token}} );
   
}
export const updateComment =async(id,blog)=>{
    const token=getCookie('token');
    console.log(token)
    const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/blogs/${id}`,blog,{headers:{Authorization:token}} );
   return data
}