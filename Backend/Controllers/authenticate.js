const users=require('../models/User')
const jwt=require('jsonwebtoken')

const authenticateUser=async(req,res,next)=>{

 try{
    if(!req.cookies.access){
        res.status(404).json("Not authenticated")
     }
     const decoded=jwt.verify(req.cookies.access,"asdfghjkl")
     console.log(decoded)
     const user=await users.findById({_id:decoded._id})
     if(user){
    req.user=user
    next()
     }
     
  }
    
       
 catch(error){
   res.status(404).json({message:error.message})
 }
      
    
  
}

module.exports=authenticateUser