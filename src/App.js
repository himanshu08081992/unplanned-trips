import './App.css';
import Image from './components/img';
import Home from './home';
import {Stocks} from './ifelse';
import Student from './components/student';
import User from './components/user';
import data from "./data/usersdata.json";
import Card from './components/carduser';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Car from './components/carsousel';
import Fetch from './components/fetch';
import Fun from './components/onkeyup';
import Form from './components/form';
import Print from './components/printstar';
import Hpage from './components/homepage';
import About from './components/aboutus';
import Formdata from './components/formdata';
import Dest from './components/destinations';
import  State  from './components/state';
import  Form2  from './components/form2';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'





// forn my site 
const App=()=> {
  return(
    <div>
<Router>
<Navbar/>
  <Routes>

    <Route path='/' element={<Hpage/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='carduser' element={<Card/>}/>
    <Route path='user' element={<User/>}/>
    <Route path='image' element={<Image/>}/>
    <Route path='state' element={<State/>}/>
    <Route path='fetch' element={<Fetch/>}/>
    <Route path='onkeyup' element={<Fun/>}/>
    <Route path='form' element={<Form/>}/>
    <Route path='printstar' element={<Print/>}/>
    <Route path='car' element={<Car/>}/>
    <Route path='dest' element={<Dest/>}/>
    <Route path='formdata' element={<Formdata/>}/>
    <Route path='form2' element={<Form2/>}/>

  </Routes>
  <Footer/>
</Router>
    </div>
  )
}


export default App;
