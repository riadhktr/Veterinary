import * as React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import './css/home.css'

const Home=()=> {
  return (
    <div>
    <section className="section1">                       
	<h1>The health of your animals will always be our priority</h1>
    </section>
 
                                       
<section className="section2">           
<div className="para1">
<p>
We want patients to find the perfect doctor and book an appointment in the easiest way. 
The patient's journey should be pleasant, and that's why we are always at their side: 
to help them find the best care possible. Anytime anywhere.
</p>
</div> 
<div className="para2">
<p>We also help doctors better manage their practice and build their e-reputation. 
	With our end-to-end integrated solution, physicians can not only improve their online presence, 
	but also focus their time on what really matters: their patients.</p>
</div>
</section>

<section className="section3">             
<div className="carte1">
	<img src="https://www.docplanner.com/icons/icon-patients.svg"alt=""/>
	<h1>Client</h1>
	<h3>Find a veterinarian, book a visit and resolve any health-related doubts</h3>
	<Button variant='dark' > <Link to ="/register" style={{textDecoration:"none",color:"white"}}>SignUp</Link></Button>
</div>
<div className="carte2">
	<img src="https://www.docplanner.com/icons/icon-doctors.svg" alt=""/>
	<h1>Veterinary</h1>
	<h3>Save time managing visits and share your knowledge with pet owners</h3>
	<Button variant='dark'><Link to ="/registerVet" style={{textDecoration:"none",color:"white"}} >SignUp</Link></Button>

</div>


</section>
          
</div>
  )
}

export default Home
