const users=require('../models/User')
const data=require('../models/Data')

const deleted=async(req,res)=>{

 try{
    const us=await data.findOneAndDelete({_id:req.params.id})
        if(us){
         res.status(201).json("deleted SuccessFully")
        }
        else{
            res.status(401).json("Not Enough")  
           
        }
 }catch(error){
   res.status(404).json({message:error.message})
 }
      
    
  
}

module.exports=deleted