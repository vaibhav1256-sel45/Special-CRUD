
const users=require('../models/User')

const login=async(req,res)=>{

    try{  
    const user= await users.findOne({$and:[{Email:req.body.Email},{Password:req.body.Password}]})
    if(user){
    
    
      const access= await user.generateAccessToken()
      const refresh= await user.generateRefreshToken()
      console.log(access)
      user.RefreshToken=refresh
       await user.save({validateBeforeSave:false})
      
       const options={
          httpOnly:true,
                 
       }
     
    res.status(200).cookie("access",access,options).cookie("refresh",refresh,options).json("Logged In SuccessFully")
    
  }
  else{
        res.status(404).json("Email or password not Valid")
       }
  
     
  
    }
    catch(error){
        res.status(error.statusCode || 500).json(error.message)
    }
}

module.exports=login