import React, { Component, useState } from 'react'
import './passes_style.css'
import { Link, useNavigate } from 'react-router-dom'


const Landing = () => {

  const [credentials,setCredentials] = useState({email: "", password: ""});
  let navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = fetch("http://localhost:4100/api/auth/",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body : JSON.stringify({email: credentials.email,password: credentials.password})
    })

    var json = await response;
    json = await json.json();

    console.log(json)

    setCredentials({email: "", password: ""})

    if(json.success){
      localStorage.setItem("token",json.authtoken);
      if(json.type === 'user'){
        navigate("/clgin")
      }
      else{
        navigate("/adminlgin")
      }
    }
    else{
      alert("Invalid username or password")
    }
  }

  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value});
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='box text-center'>
      <h1 style={{textAlign: "center",padding:"10px"}}><b><u>Login</u></b></h1>
      <div id = "landing">
      <div className='usn'>
        <h3 className = "usn_heading">Username:</h3>
        <input type = 'text' className='usn_inp' name = "email" id = "email" onChange={onChange} required></input>
      </div>
        <div className='usn'>
          <h3 className = "usn_heading">Password:</h3>
          <input type = 'password' className='usn_inp' name = "password" id = "password" onChange={onChange} required></input>
        </div>
        <div className='lgin'>
          <button type='submit' className = "lgbt" id = "lgbt1" value={"Submit"}><b>Login</b></button>
          {/* <button type='submit' value={"Submit"} className = "lgbt" id = "lgbt2"><Link to = "/adminlgin"><b>Admin Login</b></Link></button> */}
          <p className='s'>Don't have an account? <Link to='/signup' className='link'>Sign Up</Link></p>
        </div>
      </div>
    </div>
    </form>
  )
}

export default Landing

