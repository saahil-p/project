import React, { Component } from 'react'
import Payments from './Payments'
import "./passes_style.css"
import { Link } from 'react-router-dom'

export default class New_pass extends Component {
  render() {
    return (
      <>
      <div className='box2'>
        <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>New Pass</u></h1>
        <div id = "newpass">
          <form>
          <div>
            <p id = "l1">Location : </p>
            <input type = "text" id = "validity" required/>
            </div>
            <div>
            <p id = "v1">Validity :</p>
            <select id = "s1">
              <option value = "1d">1 Day</option>
              <option value = "1m">1 Month</option>
              <option value = "1y">1 Year</option>
            </select>
            </div> 
            <div>
            <p id = "t1">Type : </p>    
            <select id = "s1">
              <option value = "1d">2 Wheeler</option>
              <option value = "1m">4 Wheeler</option>
              <option value = "1m">2 Wheeler + 4 Wheeler</option>
            </select>
            </div>
            <button type = "Pay" className='lginbtn'><Link to = '/payments' className='link'>Pay Now</Link></button>
          </form>
          </div>
      </div>
      </>
    )
  }
}
