import React from 'react';
import './nav.css' ;
import {FiSearch } from 'react-icons/fi';
import {BsFillAirplaneFill } from 'react-icons/bs';
// import  from 'FontAwesomeIcon'
import { Link } from "react-router-dom";
const navbar = () => {

  return (<>
    {/* <div className='navbar' style={{display:"flex"  }}>

        <h1>Navbar</h1>
        <div className='ul'>
            <ul> b
             <li> <Link className='li'to={'/'}>Home</Link></li>
            <li> <Link className='li' to={'image'}>Image</Link></li>
            <li> <Link className='li' to={'user'}> User</Link></li>
            <li> <Link className='li' to={'state'}> UseState </Link></li>
            </ul> 
        </div>
    </div> */}
 
 {/* bootstrap navbar  */}
 <nav className="navbar navbar-expand-lg bg-secondary text-black navbar-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-white fw-bold fs-3" to= ''>Unplanned-<span className='text-black'>Trips</span>< BsFillAirplaneFill className=' icon fs-2 mb-2 ms-3'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 ms-auto mb-lg-0">
            <li> <Link className='nav-link 'to={'/'}>Home</Link></li>
            <li> <Link className='nav-link 'to={'about'}>About</Link></li>
            <li> <Link className='nav-link 'to={'dest'}>Destinations</Link></li>
          
           
            {/* <li> <Link className='nav-link li' to={'fetch'}> fetch </Link></li> */}
    <li className="nav-item dropdown ">
  <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Components
  </Link>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  <li> <Link className='dropdown-item ' to={'car'}> carousel </Link></li>
  <li> <Link className='dropdown-item ' to={'formdata'}> formdata </Link></li>
  <li> <Link className='dropdown-item 'to={'carduser'}>carduser map</Link></li>
    <li ><Link className="dropdown-item " to={'fetch'}>fetch</Link></li>
    <li><Link className="dropdown-item  " to={'onkeyup'}>onkeyup</Link></li>
    <li ><Link className="dropdown-item  " to={'form'}>Form</Link></li>
    <li ><Link className="dropdown-item  " to={'printstar'}>star</Link></li>
    <li> <Link className='dropdown-item ' to={'image'}>Image</Link></li>
            <li> <Link className='dropdown-item ' to={'user'}> User</Link></li>
            <li> <Link className='dropdown-item ' to={'state'}> UseState </Link></li>
            <li> <Link className='dropdown-item ' to={'form2'}> Form2</Link></li>
           
  </ul>
</li>
</ul>
      <form className="d-flex m-0 p-0 ">
        <input className="btn input bg-white text-black" type="search" placeholder="Find" />
        <button className="btn btn1" type="submit"><FiSearch/></button>
      </form>
    </div>
  </div>
</nav> 
</>
)
}

export default navbar ;
