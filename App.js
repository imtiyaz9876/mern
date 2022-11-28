const dotenv=require("dotenv")
const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
dotenv.config({path:`./config.env`})

require("./db/connection")
const User =require("./models/userSchema")
const app =express()
app.use(express.json())
const corsOptions = {
    origin: true, //included origin as true
    credentials: true //included credentials as true
};

app.use(cors(corsOptions));
// app.use(cors())
// link router file
app.use(require("./router/auth"))

// const DB = process.env.DATABASE;
const PORT=process.env.PORT




const middleware =(req,res,next)=>{
    console.log("my middleware")
    next();
}


// app.get("/" , (req,res)=>{
//     res.send("home page")
// })

app.get("/about", (req,res)=>{
    res.send("about page")
})

app.get("/contact" , (req,res)=>{
    res.cookie("test","thapa")
    res.send("contact page")
})

// app.get("/signin" , (req,res)=>{
//     res.send("signin page")
// })

// app.get("/signup" , (req,res)=>{
//     res.send("signup page")
// })



app.listen(PORT , ()=>{
    console.log(`server is running at port number ${PORT}`)
})