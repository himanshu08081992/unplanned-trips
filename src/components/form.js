import React from 'react'

const Form = () => {
const formSubmit=(e)=>{
e.preventDefault();
var data = new FormData(e.currentTarget);
var email = data.get("email")
var pass = data.get("password")
console.log(email ,pass);

}

  return (
    <form className='form-control' onSubmit={formSubmit}>
  <div classname="mb-3">
    <label htmlfor="exampleInputEmail1" classname="form-label">Email address</label>
    <input type="email" classname="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
    {/* <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div classname="mb-3">
    <label htmlfor="exampleInputPassword1" classname="form-label">Password</label>
    <input type="password" classname="form-control" name='password' id="exampleInputPassword1" />
  </div>
  <div classname="mb-3 form-check">
    <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
    <label classname="form-check-label" htmlfor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" classname="btn btn-primary">Submit</button>
</form>
  )
}

export default Form ;
