import React,{useState,useEffect} from 'react';
import {deleteComment,updateComment} from '../api/forumApi';
import {useDispatch,useSelector} from 'react-redux'
import {setAccount} from '../store/accountSlice'
import {fetchAccount} from '../api/userApi'
import {Button} from 'react-bootstrap'
const ForumCard = ({comment,getComment}) => {
  
  const [show,setSHow] = useState(false);
  const [content,setContent] = useState();
  const dispatch = useDispatch()
  const account = useSelector(state=>state.account)

  const getUser=async()=>{
  const data = await fetchAccount()
  dispatch(setAccount(data))
   
  }
  useEffect(()=>{
    getUser();
    
  },[])

  const deleteHandler = async()=>{
    await deleteComment(comment._id);
    getComment();
    }
    
  const handelShow = ()=>{
  setSHow(!show);
  
}

    const updateHandler = async()=>{
      
      await updateComment(comment._id,{content});

      setContent('');
      setSHow(false)
      getComment();
     
    
      }
      
      
return (
 <div className='comment card m-5 '>
    
            <div className="card-body p-3">
            <div style={{ display:'flex',justifyContent:'flex-end'}} >
            <img className="rounded-circle img-fluid" src={`/public/uploads/${comment.user.img}`} style={{width: '80px',height:'80px'}}/>
            </div>
            <h3 className="mb-3">{comment.title}</h3>
            
            <p className="small mb-0"> <span className="mx-2">|</span> Created by <strong>{comment.user.firstName} {comment.user.lastName} </strong> {comment.updatedAt.split('T').join(' ').split('').splice(0,16)}</p>
            <hr className="my-4"/>
            <div className="d-flex justify-content-start align-items-center">
            
              
            <p>{comment.content}</p>

            { show && <div> <input type='text' name='content' onChange={(e)=>setContent(e.target.value)} 
            style={{ marginLeft:'10px'}} />
           
            <Button style={{backgroundColor:'transparent',color:'black', marginLeft:'10px'}} onClick={updateHandler}> Update </Button></div>
            }
            </div>
            
        {(comment.user._id === account._id) ? 
        <div style={{display:"flex",justifyContent:"flex-end"}}>
        <button style={{border:'none',backgroundColor:"transparent"}} onClick={handelShow}><i className='fas fa-pen'></i></button>
        <button style={{border:'none',backgroundColor:"transparent",marginRight:"20px"}} onClick={deleteHandler}><i className='fas fa-trash '></i></button></div> : null }
      
  
            
          </div>
        

</div>
  )
}

export default ForumCard