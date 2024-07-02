const users=require('../models/User')


const user=async(req,res)=>{

 try{
    const us=await users.findOne({$or:[{Email:req.body.Email},{UserName:req.body.UserName}]} )
        if(!us){
        
      
      var char=new users({
            Name:req.body.Name,
            occupation:req.body.occupation,
            UserName:req.body.UserName,
            Email:req.body.Email,
           
            Password:req.body.Password
           })
         const s=  await char.save();
         if(s){
            return  res.status(201).json("User Created")  
         }
        }
        else{
            res.status(201).json("User Already Exist")  
           
        }
 }catch(error){
   res.status(404).json({message:error.message})
 }
      
    
  
}

module.exports=user