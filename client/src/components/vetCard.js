import React ,{useEffect} from 'react'
import {Card,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {setAccount} from '../store/accountSlice'
import {fetchAccount} from '../api/userApi'
import { useNavigate } from 'react-router-dom'
import Stars from './Star'
const VetCard = ({users,getAccount}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const account = useSelector(state=>state.account)

  const getUser=async()=>{
  const data = await fetchAccount()
  dispatch(setAccount(data))
   
  }
  useEffect(()=>{
    getUser();
    
  },[])
  
  const Show = ()=>{
   
  navigate(`/user/dashboard/appoinment/${users._id}`)
   }
  return (
    
  <Card style={{ width: '18rem' }}>
  <Card.Img   src={`/public/uploads/${users.img}`}  style={{ height: '18rem' }}/>
  <Card.Body>
    <div className='title'>
    <Card.Title> {users.firstName} {users.lastName}</Card.Title>
    
  </div>
    <Card.Text> <strong>Email:</strong> {users.email}</Card.Text>
    <Card.Text> <strong>Location:</strong> {users.adresse}</Card.Text>
    <Card.Text> <strong>Phone : </strong>  {users.phone} </Card.Text>
    <div className='buttons'>
      <Button style={{backgroundColor:'transparent', color:'black'}}
      onClick={(e)=>Show(e)}>Appoinement</Button>
  </div>
  </Card.Body>
  {/* <Stars/> */}
</Card>

  )
}

export default VetCard