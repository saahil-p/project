import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';


const Payments = (props) => {

  const l = useLocation()
  const {location,type,validity} = l.state;
  return (
    <div>
      <div className='box2'>
          <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>Payment   Gateway</u></h1>
        <div id='payopt'>
        <h4 style={{textAlign: "center",paddingLeft:"5px", fontFamily:"TimesNewRoman"}}><u>Payment Options</u></h4>
          <form>
            <div>
            <select id = "s2" required>
              <option value = "upi">UPI</option>
              <option value = " cc">Credit Card</option>
              <option value = "dc">Debit Card</option>
              <option value = "nb">Net Banking</option>
            </select>
        </div> 
      </form>
      <button className='lginbtn'> <Link to = '/ps' className='link' state={{loc: location, tpe: type, val: validity}}>Pay Now! </Link></button>
    </div>
        </div>  
      
    </div>
  )
}

export default Payments