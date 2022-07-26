import React,{useState} from 'react'
import { Button, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import { createAppoinement } from '../api/appoinement';
import { useParams ,useNavigate} from 'react-router-dom';



const Appoinement = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [body, setBody] = useState(new Date());
  // console.log(body)

const handelSubmit = async(e)=>{
  e.preventDefault();
  
const  data = {body};
await createAppoinement(data,id);
navigate('/user/dashboard')
}

  return (

      <div style={{display:'flex', justifyContent:'center',marginTop:'20%' }}>
      <div>
      <DatePicker placeholder="select date" selected={body} onChange={(date) => setBody(date)} />
      </div>
      <div>
      <Button type="primary" style={{marginLeft:'20px'}} onClick={(e)=>handelSubmit(e)} >PRESS ME</Button>
      <Link to='/user/dashboard/veterinaire' type="primary" style={{marginLeft:'20px'}} >Go Back</Link>
      </div>
     
     </div>
  
  )
}

export default Appoinement

