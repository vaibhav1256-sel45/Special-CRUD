import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/SignUp.css'
import axios from 'axios'
function Signup() {
    const URL="http://localhost:8000/users"
    const navigate=useNavigate()
    const[user,setUser]=useState({
        Name:'',
        occupation:'',
        UserName:"",
        Email:'',
        Password:''
      })
    const Handle=(e)=>{
        
        setUser((prev)=>{return({...prev,[e.target.name]:e.target.value})})
    }
    const sub=async(e)=>{
        console.log(user)
        e.preventDefault();
        try{
       const res= await axios.post(`${URL}/post`,user)
       if(res.data==="User Created"){
        navigate('/')
       }
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className='container2'>
       <div class="container1">
   
   <form   onSubmit={(e)=>sub(e)} enctype="multipart/form-data" method='post'>
   <h2>Signup Form</h2>
   
       <label for="name">Name:</label>
       <input type="text" className='text1'id="name" name="Name" placeholder="Enter your name" required onChange={(e)=>Handle(e)}/>
       <label for="occupation">Occupation:</label>
       <input type="text"  className='text1' id="occupation" name="occupation" placeholder="Enter your occupation" required onChange={(e)=>Handle(e)}/>
       <label for="username">Username:</label>
       <input type="text"   className='text1'id="username" name="UserName" placeholder="Enter your username" required onChange={(e)=>Handle(e)}/>
       <label for="email">Email:</label>
       <input type="text"   className='text1' id="email" name="Email" placeholder="Enter your email" required onChange={(e)=>Handle(e)}/>
       <label for="password">Password:</label>
       <input type="password"   className='text1'id="Password" name="Password" placeholder="Enter your password" required onChange={(e)=>Handle(e)}/>

       <input type="submit" className='btn1' value="SignUp" />
      <Link to='/'> <input type='button' className='btn1' value='Go back' ></input></Link>
   </form>
  

  
</div>

    </div>
  )
}

export default Signup