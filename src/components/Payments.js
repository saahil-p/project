import React, { Component } from 'react'

export default class Payments extends Component {
    constructor(){
        super(); 
    }
  render() {
    return (
      <div className='box2'>
          <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>Payment   Gateway</u></h1>
        <div id='payopt'>
        <h4 style={{textAlign: "center",paddingLeft:"5px", fontFamily:"TimesNewRoman"}}><u>Payment Options</u></h4>
          <form>
            <div>
            <select id = "s2">
              <option value = "upi">UPI</option>
              <option value = " cc">Credit Card</option>
              <option value = "dc">Debit Card</option>
              <option value = "nb">Net Banking</option>
            </select>
        </div> 
      </form>
    </div>
        </div>  
    )
  }
}