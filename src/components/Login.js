import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"


const Login = () => {
  const navigate=useNavigate()

  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const loginData=async(e)=>{
  e.preventDefault();
  // console.log(email,password)

  const res =await fetch("/login",{
    method:"POST",
    body:JSON.stringify({email,password}),
    credentials: 'include',
    headers:{
      "Content-Type":"application/json"
    }
    
  })
    const data=await res.json()

    console.log(data)

    if( data){
      window.alert("login successfull")
      localStorage.setItem("jwtoken ", JSON.stringify(data.tokens))

    }else{
      window.alert("invalid credential") 
      // console.log(data)
      // localStorage.setItem("user", JSON.stringify(data.name))
        
      navigate("/")
      
      
    }
    
  }

  return (
    <div>

     
<div className="signUpConatiner">
      <div className="signUpinput">
      
      <h1>Login</h1>
      <i class="fa-regular fa-user"></i>

         <input type="text" className='inputSignUp' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your email' style={{marginBottom:"5px"}}  /><br/>

         
         <input type="text" className='inputSignUp' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Your password' style={{marginBottom:"5px"}} /><br/>


         <button type="button" onClick={loginData} className='registerBtn'>Login</button>

      </div>
      <div className="signUpImg">

      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmQKBfRrR7KmuicW5hkeN_1PnxQBYkjO1obDik8awn-omto0S15wvxeB2lUFsz1V4DXI&usqp=CAU' alt='' /> 
      </div>
     </div>


    </div>
  )
}

export default Login