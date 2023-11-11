import React, { Component, useState } from 'react'
import Payments from './Payments'
import "./passes_style.css"
import { Link, useLocation } from 'react-router-dom'

const New_pass = () => {

  const [details,setDetails] = useState({location: "",validity: "", type: ""})


  const onChange = (e)=>{
    setDetails({...details,[e.target.name]: e.target.value})
    console.log(details)
  }

  return (
      <>
      <div className='box2'>
        <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>New Pass</u></h1>
        <div id = "newpass">
          <form>
          <div>
            <p id = "l1">Location : </p>
            {/* <input type = "text" id = "validity" required/> */}
            <select id = "s1" required name = "location" onChange={onChange}>
              <option value = "disable" disabled selected hidden>Choose a location</option>
              <option value="pesu_ecc">PESU ECC</option>
              <option value="pesu_rr">PESU RR</option>
            </select>
            </div>
            <div>
            <p id = "v1">Validity :</p>
            <select id = "s1" required name='validity' onChange={onChange}>

              <option value = "disable" disabled selected hidden>Choose a validity</option>
              <option value = "1d" >1 Day</option>
              <option value = "1m" >1 Month</option>
              <option value = "1y" >1 Year</option>
            </select>
            </div> 
            <div>
            <p id = "t1">Type : </p>    
            <select id = "s1"  name = "type" required onChange={onChange}>
              <option value = "disable" disabled selected hidden>Choose a pass type</option>
              <option value = "2W" >2 Wheeler</option>
              <option value = "4W" >4 Wheeler</option>
              <option value = "2+" >2 Wheeler + 4 Wheeler</option>
            </select>
            </div>
            <button type = "Pay" className='lginbtn'><Link to = '/payments' className='link' state={{location: details.location, type : details.type, validity: details.validity}}>Pay Now</Link></button>
          </form>
          </div>
      </div>
      </>
  )
}

export default New_pass

