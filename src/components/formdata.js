import React ,{useState} from 'react'
import logo from "../images/logologin.png"
const Formdata = () => {

    const[user,setUser]=useState({
        name:"",email:"",contact:"",password:"",cpassword:""
    })
    let name , value ;
const handleInputs=(e)=>{
console.log(e);
name=e.target.name;
value=e.target.value;
setUser({ ...user , [name]:value});
}
  return (
    <div className="d-flex justify-content-center align-items-center" >

<div className='col-lg-6 my-5'> <form>
<div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text"  name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.name} onChange={handleInputs} />
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">E-mail</label>
    <input type="text" name='email' className="form-control" id="exampleInputPassword1" value={user.email} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contact</label>
    <input type="contact" name='contact' className="form-control" id="exampleInputPassword1" value={user.contact} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="exampleInputPassword1" value={user.password} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">confirm-Password</label>
    <input type="password" name='cpassword' className="form-control" id="exampleInputPassword1"  value={user.cpassword} onChange={handleInputs}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
</div>
<div className='col-lg-2 my-5 mx-5 text-end'>
    <img className='img-fluid' src={logo}/>
</div>
    </div>
  )
}

export default Formdata ;