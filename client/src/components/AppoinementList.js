import React ,{useState,useEffect}  from 'react'
import { getAppoinement } from '../api/appoinement';
import AppoinementVet from './AppoiCard2';
import AppoinementCard from './AppoinCard';

const AppoinementList = ({account,getAccount}) => {
  
    const [appoinement,setAppoinement] = useState([])
    
    const fetchAppoinement = async()=>{

      const data = await getAppoinement();
      setAppoinement(data);
     }
    
    useEffect(()=>{
  
    fetchAppoinement();
  
   },[])
  return (
    
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'-100px', marginLeft:'19rem'}}>
      {appoinement.map((el,key)=>{
        if(el.from._id === account._id){
        return <AppoinementCard Appoinement={el} key={el._id}/>
      }else if((el.to._id === account._id)){
        return <AppoinementVet Appoinement={el} fetchAppoinement={fetchAppoinement} key={el._id} />
      }else{
        return  null
      }})}
      
    </div>
  )
}

export default AppoinementList