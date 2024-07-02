const users=require('../models/User')
const data=require('../models/Data')

const getData=async(req,res)=>{

 try{
    const us=await data.find({CreatedBy:req.user._id})
        if(us){
         res.status(201).json(us)
        }
        else{
            res.status(401).json("Not Enough")  
           
        }
 }catch(error){
   res.status(404).json({message:error.message})
 }
      
    
  
}

module.exports=getData