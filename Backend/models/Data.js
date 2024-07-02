const mongoose=require('mongoose')

const jwt=require("jsonwebtoken")
const schema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true,
       
    },
    Email:{
        type:String,
        required:true
    },
    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    
   
})

  

 const data=mongoose.model('data',schema)
 module.exports=data