import React, { useState } from 'react'

const Fun = () => {
 const [name , setName]=useState();
    const click=()=>{
        alert("I'M GOOD dude")
    }
    const click2=(x)=>{
        alert(x)
    }


  return (
    <div>
<button onClick={click}>How are you?</button>
<button onClick={()=>
    click2("i dont know ")}>Age</button>
<button></button>


<input type={"text"} placeholder={"Enter something intersting"} onKeyUp={(e)=>setName(e.target.value)}/>
 <h1>{name}</h1>
 
    </div>
  )
}

export default Fun;