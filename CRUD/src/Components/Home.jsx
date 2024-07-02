import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import axios from 'axios'
function Home() {
const URL="http://localhost:8000/users"
const [data,setData]=useState([{}])
const navigate=useNavigate()
const [upd,setUpd]=useState(false)
const[id,setid]=useState()
const[si,setSi]=useState({
  Name:'',
  Mobile:'',
  Email:'',
  Address:''
})
 useEffect(()=>{
  const fetch=async()=>{
  try{
  
   const res= await axios.get(`${URL}/getdata`,{withCredentials:true})
   if(res){
   setData(res.data)
   }
  } catch(error){
    console.log(error.message)
  }
  
}
fetch()
 },[])
 const signout=async()=>{
  try{
    const s=await axios.get(`${URL}/logout`,{withCredentials:true})
    navigate('/')
 
  }
 catch(error){
  console.log(error)
 }
}
 const up=(value)=>{
  setUpd(true)
    setSi(value)
    setid(value._id)
 }
 
  const de=async(id)=>{
    try{
      const s=await axios.delete(`${URL}/delete/${id}`,{withCredentials:true})
      if(s){
      const res= await axios.get(`${URL}/getdata`,{withCredentials:true})
      if(res){
      setData(res.data)
      }
    }
    }
   catch(error){
    console.log(error)
   }
  }
  const Handle=(e)=>{
    setSi((prev)=>{return({...prev,[e.target.name]:e.target.value})})
    
  
  }
  const se=async()=>{
    await axios.post(`${URL}/data`,si,{withCredentials:true})
    const res= await axios.get(`${URL}/getdata`,{withCredentials:true})
    if(res){
    setData(res.data)
    }
  }
  const se1=async()=>{
    console.log("hi")
    try{
    const s=await axios.put(`${URL}/update/${id}`,si,{withCredentials:true})
    if(s){
      setUpd(false)
     setSi( { Name:'',
      Mobile:'',
      Email:'',
      Address:''})
    }
    const res= await axios.get(`${URL}/getdata`,{withCredentials:true})
    if(res){
    setData(res.data)
    }
  }catch(error){
    console.log(error)
  }
  }
  return (
    <div>
      <h2>User Data Management</h2>
      
   <div id="formContainer">
    <label for="nameInput">
        Name:
    </label>
    <input type="text" id="nameInput" 
      onChange={(e)=>Handle(e)} value={si.Name} name="Name" placeholder="Enter Name..."/>
    <label for="emailInput">
        Email ID:
    </label>
    <input type="email" id="emailInput" 
       onChange={(e)=>Handle(e)} value={si.Email} name="Email" placeholder="Enter Email..."/>
    <label for="numberInput">
        Mobile Details:
    </label>
    <input type="text" id="numberInput" 
        onChange={(e)=>Handle(e)}  value={si.Mobile} name='Mobile' placeholder="Enter Mobile Details..."/>
    <label for="addressInput">
        Address:
    </label>
    <textarea id="addressInput" 
      onChange={(e)=>Handle(e)} value={si.Address} name='Address'   placeholder="Enter Address..."></textarea>
    <br/>
    {!upd?(<> <button onClick={()=>se()} >Add</button></>):(<> <button onClick={()=>se1()} >Update</button></>)}
   
</div>

<table id="outputTable">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Details</th>
        <th>Address</th>
        <th colSpan={2}>Action</th>
    </tr>
    {data?.map((value)=>(
       <tr>
       <td>{value.Name}</td>
       <td>{value.Email}</td>
       <td>{value.Mobile}</td>
       <td>{value.Address}</td>
       <td onClick={()=>up(value)}>Update</td>
       <td onClick={()=>de(value._id)}>Delete</td>
     </tr>
    ))}
  
</table>
<div>
  <button onClick={()=>signout()}>Sign Out</button>
</div>
    </div>
  )
}

export default Home