import React, { useState } from 'react'

const Form2 = () => {
    const [user , setUser]=useState()
    const [password , setPassword]=useState()
    function register(e){
    e.preventDefault();
    fetch('http://localhost:5000/register',{
        method:"POST",body:JSON.stringify({user,password}),headers:{'Content-Type':'application/json'}
    })
    }
  return (
   <form onSubmit={register}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text"  name='name' className="form-control" id="Email1" aria-describedby="emailHelp" value={user} onChange={e.target.value} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">E-mail</label>
    <input type="password" name='password' className="form-control" id="Password1" value={password} onChange={e.target.value} />
  </div>
  <button> click me</button>
   </form>
  )
}

export default Form2