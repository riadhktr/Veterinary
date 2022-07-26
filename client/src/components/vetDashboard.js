import React,{useEffect,useState} from 'react';
import {fetchAccount,updateProfile,updatePicture} from '../api/userApi';
import {useDispatch,useSelector} from 'react-redux';
import {Button} from 'react-bootstrap'
import {setAccount} from '../store/accountSlice';
import isEmpty from 'validator/lib/isEmpty';
import {showErrMsg} from './helpers/Message';
import AppoinementList from './AppoinementList';
const VetDashboard = () => {

  const [fileName,setFileName] = useState('');
  const [toggle, setToggle] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
 
  const handelToggle = () => {
    setToggle(!toggle)
    console.log('tog',toggle)
  }
  const handelUpdate = ()=>{
    setShowUpdate(! showUpdate);
  }

  const [newForm,setNewForm] = useState({
    username:'',
    firstName:'',
    lastName:'',
    phone:'',
    adresse:'',
    errMsg: false,
  })
  
  const {username,firstName,lastName,phone,adresse,errMsg} = newForm;
  
  const onChangeFile =(e)=>{

    setFileName(e.target.files[0]);
    console.log('file',fileName)
  }
  
  const handleChange = (e)=>{
    setNewForm({
    ...newForm, 
    [ e.target.name]: e.target.value,
    errMsg:''
    })
    console.log(newForm)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isEmpty(username) || isEmpty(lastName) || isEmpty(firstName) || isEmpty(phone) || isEmpty(adresse)){
      setNewForm({
          ...newForm , errMsg:'Tous les champs sont obligatoires'
      })}else{const {username,firstName,lastName,phone,adresse} = newForm;
      const data ={username,firstName,lastName,phone,adresse}
      updateProfile(data).then(response =>{
            console.log(response)
            setNewForm({
              username:'',
              firstName:'',
              lastName:'',
              phone:'',
              adresse:'',
                
            })
            
            
        })}
    
  }
  
  const dispatch = useDispatch()
  const account = useSelector(state=>state.account)
 
  const getAccount=async()=>{
  const data = await fetchAccount()

  dispatch(setAccount(data))
   
  }
  useEffect(()=>{
    getAccount();
  },[newForm])

  const submitPicture = async(e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append('picture',fileName)
   await updatePicture(formData)
    getAccount();
  }
  return (
    <section >
  
  <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={`/public/uploads/${account.img}`} alt="avatar"
              className="rounded-circle img-fluid" style={{width: '200px',height:'200px'}}/><div style={{marginLeft:'150px'}}>
               
                <button onClick={handelUpdate} style={{backgroundColor:'transparent',border:'none'}}><i className="fas fa-camera"></i></button></div>
            
            { showUpdate && (<div><input type="file" 
               name="picture"
               onChange={(e)=>onChangeFile(e)} 
               /> <Button onClick={(e)=>submitPicture(e)} style={{marginTop:'10px'}}>Upload</Button></div>) 
               }
        <h5 className="my-3">{account.lastName} {account.firstName}</h5>
            
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary"onClick={handelToggle}>Update Profile</button>
              </div>
          </div>
        </div>
        
         
      </div>
      <div className="col-lg-7">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Username</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{account.username}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{account.email}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">+216{account.phone}</p>
              </div>
            </div>
            
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{account.adresse}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Role</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{account.role}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </div>
    
    <AppoinementList account={account} getAccount={getAccount}/>
    <div style={{width:'330px' ,marginLeft:'35rem',marginTop:'80px'}}>{errMsg && showErrMsg(errMsg)}</div>
    
    {toggle && (<div style={{display:'flex', flexDirection:'column',marginLeft:'40%', marginTop:'50px',width:'500px' }}>
    
     < input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
        
        /><br></br>    
    < input
        type="text"
        placeholder="LastName"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        
        /><br></br>
    < input
        type="text"
        placeholder="FirstName"
        name="firstName"
        value={firstName}
        onChange={handleChange} 
        /><br></br>
        < input
        type="text"
         placeholder="Phone"
         name="phone"
         value={phone}
         onChange={handleChange}
        /><br></br>
        < input
        type="text"
        placeholder="Adress "
        name="adresse"
        value={adresse}
        onChange={handleChange}
        />
       
        <br></br>
         
        
        <br></br>
        <button onClick={(e)=>handleSubmit(e)}>update</button>
     
      </div>)} 
      
    </section> 
   
 
   
    
  )
}

export default VetDashboard