import React,{Fragment} from 'react'
import {Navbar,Nav ,Container,NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { isAuthenticated,logout} from './helpers/auth';

const Header = () => {

  const navigate = useNavigate();
  const handleLogout = (e)=>{
   logout(()=>{
    navigate('/login')
   })
  }
return (
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand >Vet.Tn</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    {!isAuthenticated() && (
      <Fragment>
      <Nav className="ms-auto mb-2 mb-lg-0">   
      <Nav.Link as ={Link} to ='/'><i className='fas fa-home'></i> Home</Nav.Link>
      <Nav.Link as ={Link} to ='/register' ><i className='fas fa-edit'></i> SignUp</Nav.Link>
      <Nav.Link as ={Link} to ='/login'><i className='fas fa-sign-in-alt'></i> SignIn</Nav.Link>
      </Nav>
      </Fragment>
    )}
      
      {isAuthenticated() && isAuthenticated().role === 'subscriber' && (
      <Fragment>
      <Nav className="mb-2 mb-lg-0">   
            <Nav.Link as ={Link} to ='/user/dashboard/'> Profile  </Nav.Link>
            <Nav.Link as ={Link} to ='/user/dashboard/veterinaire'> Veterinaire </Nav.Link>
            <Nav.Link as ={Link} to ='/annonces'> Annonces </Nav.Link>
            <Nav.Link as ={Link} to ='/forum'> Blog</Nav.Link>
      </Nav>
      </Fragment>
    )}
    
    
    {isAuthenticated() && isAuthenticated().role  ==='vet' && (
      <Fragment>
      <Nav className="mb-2 mb-lg-0">   
             <Nav.Link as ={Link} to ='/vet/dashboard'> Profile </Nav.Link>
             <Nav.Link as ={Link} to ='/annonces'> Annonces  </Nav.Link>
             <Nav.Link as ={Link} to ='/forum'> Blog </Nav.Link>

      </Nav>
      </Fragment>
    )}
    {isAuthenticated()  &&(
      <Fragment>
      <Nav className="ms-auto mb-2 mb-lg-0">  
      
      
       
      <Nav.Link onClick={handleLogout} style={{color:"white"}} > <i className='fas fa-sign-out-alt'></i> Logout</Nav.Link>
      
        
      
      </Nav>
      </Fragment>
    )}
      
   </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default Header