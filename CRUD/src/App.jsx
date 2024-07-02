import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
function App() {
  const URL="http://localhost:8000/users"
  const navigate=useNavigate()
  const [lo,setlo]=useState({
    Email:'',
    Password:''
  })
  const handle=(e)=>{
    setlo((prev)=>{return({...prev,[e.target.name]:e.target.value})})
  }
  const lg=async(e)=>{
    e.preventDefault();
    try{
    const r=await axios.post(`${URL}/login`,lo,{withCredentials:true})
    if(r.data==="Logged In SuccessFully"){
      navigate('/home')
    }
    }
    catch(error){
      console.log(error)
    }
   
  }
  return (
    
      <div className='container1'>
        
        <div class="container2">
     
      <form onSubmit={(e)=>lg(e)}>
      <h2>Login Form</h2>
          <label for="email">Email:</label>
          <input type="text" id="email" className='text2'name="Email" placeholder="Enter your email" onChange={(e)=>handle(e)} required/>
  
          <label for="password">Password:</label>
          <input type="password"   className='text2' id="password" name="Password" placeholder="Enter your password"  onChange={(e)=>handle(e)} required/>
  
          <input type="submit"className='btn2' value="Login" />
          
         <Link to='/signup'> <input type='button'className='btn2'  value='Not a user? SignUp' ></input></Link>
         
        
      </form>
   </div>
      
  </div>
    
  )
}

export default App
