import React ,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { Box, Button} from '@mui/material';
import {showErrMsg} from './helpers/Message';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import  pic2 from './images/image2.png';
import {Link} from 'react-router-dom';
import { signin } from '../api/auth';
import { setAuthentification, isAuthenticated } from './helpers/auth';
import './css/form.css'

const Login = () => {
  const [formData,setFormData] = useState({
    
    email:'',
    password:'',
    errMsg: false,
    
})
const {email,password,errMsg} = formData;
const navigate = useNavigate();

useEffect(()=>{
  if(isAuthenticated() && isAuthenticated().role === 'admin'){
  navigate('/admin/dashboard')
  } else if (isAuthenticated() && isAuthenticated().role === 'subscriber'){
    navigate('/user/dashboard/')
  }else if (isAuthenticated() && isAuthenticated().role === 'vet'){
    navigate('/vet/dashboard')
  }
},[navigate])

const handleChange = (e)=>{
  setFormData({
  ...formData, 
  [ e.target.name]: e.target.value,
    errMsg:''
  })
  } 
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(isEmpty(email) || isEmpty(password)){
        setFormData({
            ...formData , errMsg:'Tous les champs sont obligatoires'
        })
    }else if(!isEmail(email)){
        setFormData({
            ...formData , errMsg:"email adresse n'est pas valide"
        })
    }else{
        const {email,password}= formData;
        const data = {email,password};
        signin(data)
        .then(response=>{
        setAuthentification(response.data.token,response.data.user);
        //const id = response.data.user._id
        //console.log(id)
        if(isAuthenticated() && isAuthenticated().role ==='admin'){
          console.log('redirect to admin');
          navigate('/admin/dashboard')
        }else if(isAuthenticated() && isAuthenticated().role ==='vet') {
          console.log('redirect to vet dashboard')
         
          navigate('/vet/dashboard')
        }else{
          console.log('redirect to user dashboard')
         
          navigate('/user/dashboard')
        }
        })
        .catch(err=>{
          setFormData({...formData, errMsg: err.response.data.errorMsg })
          console.log('error msg',err.response.data)
        })
    }
    }
  
  return (
    <div style={{display:"flex", justifyContent:"space-around", marginTop:"100px" }}>
        <div>
            <img src= {pic2}  width="500px" height="400px" alt="loginpic"/>
        </div>
        <div className='formulaire'>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <Box marginLeft="auto"
             marginRight="auto" 
             width={300} 
             display="flex" 
             marginTop={10}
             flexDirection={"column"}
             justifyContent="center"
             alignItems="center"
             >
              {errMsg && showErrMsg(errMsg)}
                <h2>Se connecter</h2>
                <input
                name="email"
                value={email}
                type={"email"} 
                onChange={handleChange}
                variant="outlined"
                placeholder='Email' 
                 margin="normal"/>
                <input 
                name="password"
                value={password}
                type="password" 
                onChange={handleChange}
                variant="outlined" 
                placeholder='Password' 
                margin="normal"/>
                <Button variant="contained" style={{backgroundColor:"#00b39b"}} type="submit" onClick={(e)=>handleSubmit(e)}> connecter
                </Button>
                <span>Vous n'avez pas un compte ? <Link to='/register' style={{textDecoration:'none'}}>s'inscrire</Link></span>
            </Box>
            </form>
        
           </div>
            
    </div>
  )
}

export default Login