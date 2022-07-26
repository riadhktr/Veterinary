import React, { useState ,useEffect} from 'react';
import { Box, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import  pic1 from './images/image1.png';
import {Link} from 'react-router-dom';
import {showErrMsg,showSuccessMsg} from './helpers/Message';
import { signup } from '../api/auth';
import './css/form.css'

const Register = () => {
    
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        successMsg : false,
        errMsg: false,
        
    })

    const {username,email,password,successMsg,errMsg} = formData;
    const navigate = useNavigate();
   
    const handleChange = (e)=>{
    setFormData({
    ...formData, 
    [ e.target.name]: e.target.value,
    successMsg :'',
    errMsg:''
    })
    }  
    const handleSubmit = (e)=>{
    e.preventDefault()
    if(isEmpty(username) || isEmpty(email) || isEmpty(password)){
        setFormData({
            ...formData , errMsg:'Tous les champs sont obligatoires'
        })
    }else if(!isEmail(email)){
        setFormData({
            ...formData , errMsg:"email adresse n'est pas valide"
        })
    }else{
        const {username,email,password}= formData;
        const data = {username,email,password};
        signup(data).then(response =>{
            console.log(response)
            setFormData({
                username:'',
                email:'',
                password:'',
                
                successMsg: response.data.successMsg
            })
            navigate('/login')
        }).catch(err=>{
            setFormData({...formData, errMsg: err.response.data.errorMsg })
        })
    }
    
    }
    
    return (
    <div style={{display:"flex", justifyContent:"space-around", marginTop:"100px"}}>
        <div>
            <img src= {pic1} width="500px" height="400px" alt="register"/>
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
               {successMsg && showSuccessMsg(successMsg)}
               {errMsg && showErrMsg(errMsg)}
               <h2>Inscription</h2>
               <input 
               name="username"
               value={username}
               onChange={handleChange}
               type="text" 
                 
                placeholder='UserName' 
                margin="normal"/>
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
               <Button variant="contained" style={{backgroundColor:"#00b39b"}} type="submit" onClick={(e)=>handleSubmit(e)}>S’inscrire
               </Button>
               <span>Vous avez deja un compte ? <Link to='/login' style={{textDecoration:'none'}}>Se connecter</Link></span>
           </Box>
           </form>
       
         </div>
        
      
        
    </div>
  )
}

export default Register