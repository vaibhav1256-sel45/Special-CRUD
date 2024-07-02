const data=require('../models/Data')
const jwt=require('jsonwebtoken')

const postd=async(req,res)=>{

 try{
    var char=new data({
        Name:req.body.Name,
        Address:req.body.Address,
         Mobile:req.body.Mobile,
        Email:req.body.Email,
       
        CreatedBy:req.user._id
       })
     const s=  await char.save();
     if(s){
        return  res.status(201).json("User Created")  
     }
    
    else{
        res.status(201).json("User Already Exist")  
       
    } 
     
 }
    
       
 catch(error){
   res.status(404).json({message:error.message})
 }
      
    
  
}

module.exports=postd