import React, { Component } from 'react'

export default class Payments extends Component {
    constructor(){
        super(); 
    }
  render() {
    return (
      <div className='box2'>
        <h2>Payment gateway</h2>
        <h5 style={{color: "white"}}><u> Payment Options : </u> </h5>
        <ul>
            <li><a href='/' style={{color: "purple",display : "inline"}}>UPI</a></li>
            <li><a href='/' style={{color: "purple", display: "inline"}}>Credit/Debit Card*</a></li>
            <li><a href='/' style={{color: "purple", display: "inline"}}>NetBanking</a></li>
        </ul>
      </div>
    )
  }
}
