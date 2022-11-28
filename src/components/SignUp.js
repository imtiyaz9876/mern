import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { FaBeer } from 'react-icons/fa'; <FaBeer />




const SignUp = () => {
  const navigate=useNavigate()

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[work,setWork]=useState("")
  const[password,setPassword]=useState("")
  const[cpassword,setCpassword]=useState("")

   

const postData=async()=>{
  console.log(name,email,phone,work,password,cpassword)

  const response= await fetch("/register" ,{

      method:"POST",
      body:JSON.stringify({name,email,phone,work,password,cpassword}),
      headers:{
        "Content-Type":"application/json"
      }
  })
    const result=await response.json()
  console.log(result)
  navigate("/")
}


  return (
    <div>

     
     
     <div className="signUpConatiner">
      <div className="signUpinput">
      
      <h1>SignUP</h1>
      <i class="fa-regular fa-user"></i>
         <input type="text" name="name" className='inputSignUp' placeholder='Your name' value={name}  onChange={(e)=>setName(e.target.value)} style={{marginBottom:"5px"}} /><br/>

         <input type="text" name="email" className='inputSignUp' placeholder='Your email' value={email} onChange={(e)=>setEmail(e.target.value)} style={{marginBottom:"5px"}}  /><br/>

         <input type="text" name="phone" className='inputSignUp' placeholder='Your mobile number' value={phone} onChange={(e)=>setPhone(e.target.value)} style={{outline:"none",marginBottom:"5px"}} /><br/>

         <input type="text" name="work" className='inputSignUp' placeholder='Your profession' value={work} onChange={(e)=>setWork(e.target.value)} style={{marginBottom:"5px"}} /><br/>

         <input type="text" name="password" className='inputSignUp' placeholder='Your password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:"5px"}} /><br/>

         <input type="text" name="cpassword" className='inputSignUp' placeholder='Your confirm password' value={cpassword} onChange={(e)=>setCpassword(e.target.value)} style={{marginBottom:"5px"}} /><br/>

         <button type="button" onClick={postData} className='registerBtn'>Register</button>

      </div>
      <div className="signUpImg">

      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmQKBfRrR7KmuicW5hkeN_1PnxQBYkjO1obDik8awn-omto0S15wvxeB2lUFsz1V4DXI&usqp=CAU' alt='' /> 
      </div>
     </div>


    </div>
  )
}

export default SignUp