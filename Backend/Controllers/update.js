const users=require('../models/User')
const data=require('../models/Data')

const update=async(req,res)=>{

 try{
    const us=await data.findOneAndUpdate({_id:req.params.id},{$set:{Name:req.body.Name,Email:req.body.Email,Address:req.body.Address,Mobile:req.body.Mobile}})
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

module.exports=update