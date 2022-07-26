import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import VetDashboard from './components/vetDashboard'
import AdminRoute from './components/PrivateRoutes/AdminRoute';
import UserRoute from './components/PrivateRoutes/UserRoute';
import VetRoute from './components/PrivateRoutes/vetRoute';
import NotFound from './components/NotFound';
import RegisterVet from './components/RegisterVet';
import Forum from './components/Forum';
import Veterinaires from './components/Veterinaires';
import Annonces from './components/Annonces';
import AddPet from './components/AddPet'
import Appoinement from './components/Appoinement'
import PetList from './components/PetList';


const App= ()=> {
  
return (
    <>
<Header/>
<main>
<Routes>
  <Route  path='/' element={<Home/>}/>
  <Route  path='/register' element={<Register/>}/>
  <Route  path='/registerVet' element={<RegisterVet/>}/>
  <Route  path='/login' element={<Login/>}/>
  <Route  path='/forum' element={<Forum/>}/>
  <Route  path='/annonces' element={<Annonces/>}/>
  
  {/*protected routes for veterinaires */}
  <Route element={<VetRoute/>}>
  <Route  path='/vet/dashboard' element={<VetDashboard/>}/>
  
  </Route>
  {/*protected routes for user */}
  <Route element={<UserRoute/>}>
  <Route  path='/user/dashboard' element={<UserDashboard/>}/>
  <Route  path='/myPets' element={<PetList/>}/>
  <Route  path='/user/dashboard/veterinaire' element={<Veterinaires/>}/>
  <Route  path='/user/dashboard/addPet' element={<AddPet/>}/>
  <Route path='/user/dashboard/appoinment/:id' element={<Appoinement/>}/>
  </Route>
  {/* protected routes for veterinaires*/}
  
  

  {/*protected routes for admin */}
  <Route element={<AdminRoute/>}>
  <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
  </Route>
  <Route path="*" element={<NotFound/>} />
  
</Routes>
    </main>
    </>
  );
}

export default App;
