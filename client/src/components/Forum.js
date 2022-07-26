import React ,{useEffect, useState} from 'react'
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import ForumCard from './ForumCard'
import {getComments,AddComment} from '../api/forumApi'


const Forum = () => {

 const [comments,setComments] = useState([]);
 const [formData,setFormData] = useState({
  title:'',
  content:'',
  
})

const {title,content} = formData;

const handleChange = (e)=>{
  setFormData({
  ...formData, 
  [ e.target.name]: e.target.value,
 
  })
    } 
    
  const handleSubmit = (e)=>{
    e.preventDefault();
   
    const {title,content}= formData;
    const data = {title,content};
    AddComment(data).then(response =>{
          console.log(response)
          setFormData({
             title:'',
             content:'',
              
          })
          
      })
  }
  

  
 
  const getComment=async()=>{
    const Comment = await getComments();
   
    setComments(Comment);
   
  }
  useEffect(()=>{
    getComment();
    
  },[formData])

  return (
    <div>
    <div style={{marginLeft:"28rem"}}>
  <InputGroup className="mb-4 mt-5" style={{width:"55%"}}>
    <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
    <FormControl
      aria-describedby="basic-addon1" 
      name="title"
      value={title}
      onChange={handleChange}
      />
  </InputGroup>
  <InputGroup style={{width:"55%"}}>
    <InputGroup.Text>Subject</InputGroup.Text>
    <FormControl as="textarea" 
    aria-label="With textarea"
    name="content"
    value={content}
    onChange={handleChange} />
  </InputGroup>
  <Button className='mt-2' variant="dark" style={{marginLeft:"23%"}} type="submit" onClick={(e)=>handleSubmit(e)}>Post</Button>
  </div>
  <div>
  {comments.map((e,key)=>(<ForumCard key={e._id} comment={e} getComment={getComment}/>))}
  
  </div>

</div>
  )
  }
export default Forum