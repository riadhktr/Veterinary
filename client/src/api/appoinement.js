import axios from 'axios'
import { getCookie } from '../components/helpers/cookies';
import { getLocalStorage } from '../components/helpers/localStorage';


export const createAppoinement =async(appData,id)=>{
   
    const token=getCookie('token');
    const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/appoinement/${id}`,appData,{headers:{Authorization:token}} );
    return data 
}

export const getAppoinement =async()=>{
    const token=getCookie('token');
    const user = getLocalStorage('user')
    const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/appoinement/${user._id}`,{headers:{Authorization:token}});
    //console.log(user._id)
    
    return data 
}

export const updateAppoinement =async(id)=>{

    const token=getCookie('token');

    return axios({
        method: 'put',
        url: `${process.env.REACT_APP_URL}/api/appoinement/${id}`,
        headers: { 'Authorization': token}
    })



}
export const updateDone =async(id)=>{

    const token=getCookie('token');

    return axios({
        method: 'put',
        url: `${process.env.REACT_APP_URL}/api/appoinement/done/${id}`,
        headers: { 'Authorization': token}
    })



}

export const deleteAppoinement =async(id)=>{

    const token=getCookie('token');

    return axios({
        method: 'delete',
        url: `${process.env.REACT_APP_URL}/api/appoinement/${id}`,
        headers: { 'Authorization': token}
    })



}
