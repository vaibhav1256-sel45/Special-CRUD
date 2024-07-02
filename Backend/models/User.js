const mongoose=require('mongoose')

const jwt=require("jsonwebtoken")
const schema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true,
       
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    RefreshToken:{
        type:String,
        
    },
   
})

   schema.methods.generateAccessToken=async function(){
    return await jwt.sign({
        _id:this._id
    },
    "asdfghjkl",{
        expiresIn:"1d"
    }
    )
   }
    schema.methods.generateRefreshToken=async function(){
        return await jwt.sign({
            _id:this._id
        },
        "asdfghjkl",
        {
            expiresIn:"20d"
        }
)
   }
 const users=mongoose.model('user',schema)
 module.exports=users