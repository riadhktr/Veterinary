import React, {useEffect}from 'react'
import {getUsers} from '../api/userApi'
import UserCard from './userCard'
import {useDispatch,useSelector} from 'react-redux'
import {setUsers } from '../store/userSlice'



const AdminDashboard = () => {

  const dispatch = useDispatch()
  const users = useSelector(state=>state.user)

  const getAccount=async()=>{
  const data = await getUsers()
  dispatch(setUsers(data.users))
  //console.log('data',data.users)
  }
  useEffect(()=>{
  getAccount();
 },[])
  
  
  return (
    <div>
    <div className='bg-light text-black py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1><i className='fas fa-home'> Admin Dashboard</i></h1>
         
          </div>
        </div>

      </div>

    </div>
  
    <div style={{display:"flex",justifyContent:'center',margin:'4rem',flexWrap:'wrap'}}>
        {users.map((e,key)=>(<UserCard users={e} key={users._id} getAccount={getAccount}/>))}
      
    </div>
    
    </div>
  )
}

export default AdminDashboard