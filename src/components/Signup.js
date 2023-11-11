import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {

  const [credentials,setCredentials] = useState({name : "",email: "", password: ""});
  let navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = fetch("http://localhost:4100/api/auth/createuser",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body : JSON.stringify({name: credentials.name,email: credentials.email,password: credentials.password,acctype: "user"})
    })

    var json = await response;
    json = await json.json();

    console.log(json)

    setCredentials({name: "", email: "", password: ""})

    if(json.success){
      localStorage.setItem("token",json.authtoken);
      alert("Account created successfully")
      setTimeout(()=>{
        navigate("/");
      })
    }
    else{
      alert("Invalid account details")
    }
  }

  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value});
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='box2'>
        <h1 className='sup'><b><u>Signup</u></b></h1>
        <h3 className='c_acc' style={{color:"black", fontFamily:"timesnewroman"}}><u>Create an account</u></h3>
        <div className='pass'>
        <div className='Grid' id = "sup">
            <input type='text' id = "sin" className='sin' placeholder='Name' name = "name" onChange={onChange}></input>
            <input type ="email" id = 'spem' className='spem sin' placeholder='Email' name = "email" onChange={onChange}></input>
            <input type = "password" id = "spwd"className='sin' placeholder='Password' name = "password" onChange={onChange}></input>
        </div>
            <button type='submit' className='lginbtn' id = "supbtn" value={"Submit"}><Link to = '/' className='link'><b>Signup</b></Link></button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Signup


