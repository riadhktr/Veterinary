import React ,{useEffect} from 'react'
import {getveterinaires} from '../api/userApi'
import VetCard from './vetCard'
import {useDispatch,useSelector} from 'react-redux'
import {setVets } from '../store/userSlice'

const Veterinaires = () => {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.user)

  const getAccount=async()=>{
  const data = await getveterinaires()
  dispatch(setVets(data.users))
 
 }
  useEffect(()=>{
  getAccount();
 },[])


  return (
    <div>
    <div>
    <h2 style={{textAlign:"center"}}>You can find your best veterinary here</h2>
    </div>
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {users.map((el,key)=>(<VetCard  key={el._id} users={el}  getAccount={getAccount}/>))}
    </div>
      </div>
  )
}

export default Veterinaires