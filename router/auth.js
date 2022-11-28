const express=require("express")
require("../db/connection")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const User=require("../models/userSchema")
const router=express.Router()
// const authenticate = ("../middleware/authenticate")


 


router.get("/" , (req,res)=>{
    res.send(`hello guys this router file`)
})

// ------------------------------SIGNUP ROUTE- ----------------

router.post("/register" , async(req,res)=>{

    const {name,email,phone,work,password, cpassword}=req.body
    if(!name || !email || !phone ||  !work ||  !password ||  !cpassword ){
      return res.status(422).json({error:"plz filled the field properly"})

    }
    try{
const userExist= await User.findOne({email:email})
if(userExist){
    return res.status(422).json({error: `email is already present`})
}if(password !== cpassword){
  return res.status(422).json({error:"password is not matching.."})
}
const user=new User ({name,email,phone,work,password,cpassword})

// ------------hashing password present in userSchema-------


const userRegister=await user.save();
if(userRegister){
  res.status(201).json({message:"user register successfully"})
}else{
  res.status(500).json({message:"failed to register"})
}

}catch(err){
console.log(err)
}



 console.log(req.body)
  // res.json({message:req.body})
  // res.send(`my register page`)
})

  //  -----------------------LOGIN ROUTE------------------

  router.post("/login" , async(req,res)=>{

    
    console.log(req.body)
    // res.json({msg:"awesome"})

    const {email,password}=req.body
    
    try{
      let token;
      if(!email || !password){
        return res.status(422).json({error:"some input field is missing"})
      }

      const usersLogin= await User.findOne({email:email})
      
      console.log(usersLogin)
      // ------------how to match password of user even after its bcrypt---------
    
        if(usersLogin){

          const isMatch= await bcrypt.compare(password,usersLogin.password);
        // ----------------token--------
          token=await usersLogin.generateAuthToken()
          console.log(token)

          // -----------------------cookies-----------------

          // res.cookie("jwtoken" , token,{
          //   expires:new Date(Date.now() + 25892000000),
          //   httpOnly:true
          // })

      if(!isMatch){
        res.status(201).json({error:"Invalid credential pass"})
      }else{
        return res.status(200).json({message: `User login successfully`})
      }

        }else{
          res.status(201).json({error:"Invalid credential"})
        }

      

    }catch(err){
      console.log(err)
    }

})

// ----------------about page api--------------

// router.get("/about",authenticate, (req,res)=>{
//   console.log("hello about page")
//   res.send("about page")
// })
  


module.exports= router