const mongoose=require("mongoose")

// const URL="mongodb+srv://thapa:thapa@123@cluster0.3jfqxdq.mongodb.net/mernstack?retryWrites=true&w=majority"
// mwXKd4VPs3NQxpHA  user

const URL="mongodb+srv://user:mwXKd4VPs3NQxpHA@cluster0.6qdzxkk.mongodb.net/test?retryWrites=true&w=majority"

// const DB = process.env.DATABASE;
mongoose.connect(URL).then(()=>{
    console.log( `connection success full`) 
}).catch((err)=>console.log(`no connection`))