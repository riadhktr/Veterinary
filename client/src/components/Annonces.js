import React ,{useEffect,useState} from 'react'
import {getAnnonce} from '../api/annonce'
import AnnonceCard from './AnnonceCard';
import {useSelector,useDispatch} from 'react-redux';
import {setAccount} from '../store/accountSlice'
import {fetchAccount} from '../api/userApi'

const Annonces = () => {

  const [annonces,setAnnonces] = useState([]);
  
  const account = useSelector(state=>state.account)
  const dispatch = useDispatch()
  const getUser=async()=>{
    const data = await fetchAccount()
    dispatch(setAccount(data))
     
    }
  const fetchAnnonce=async()=>{
    const pub = await getAnnonce();
 
    setAnnonces(pub);
  
  }

  useEffect(()=>{
    getUser()
    fetchAnnonce();
    
  },[])

  return (
    <div style={{margin:"100px"}}>
      
      { (annonces.length===0) ? <h1>empty list</h1> :
      annonces.map(el=><AnnonceCard key={el._id} annonce={el} fetchAnnonce={fetchAnnonce} account={account}/>) 
      }
    </div>
  )
}

export default Annonces