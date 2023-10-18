import React, { Component } from 'react'
import Payments from './Payments'
import "./passes_style.css"

export default class New_pass extends Component {
    onPaymentHandler = ()=>{
        <Payments/> //figure out how to make this work man
    }
  render() {
    return (
      <div className='box2'>
        <h2 style={{textAlign: "center"}}><u>New Pass</u></h2>
        <form>
        <div>
          <p id = "l1">Location : </p>
          <input type = "text" id = "validity"/>
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
          <button type = "Pay" onClick={this.onPaymentHandler}>Pay</button>
        </form>
      </div>
    )
  }
}
