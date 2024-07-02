

const jwt=require('jsonwebtoken')
const logout=async(req,res)=>{
    try{
     res.status(200).clearCookie('access').clearCookie('refresh').json("Cleared Successfully")
    }
    catch(error){
        res.status(404).json(error)
    }
}            

module.exports=logout