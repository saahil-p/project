import React, { Component } from 'react'

export default class U_rate extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 className='text-center' style={{color:'white'}}><b><u>New Rates</u></b></h1>
        <div>
            <h3 className='disp'>Day:</h3>
            <input type = "text" id = "location"></input>
            <p></p>
            <h3 className='disp'>Month:</h3>
            <input type = "text" id = "location"></input>
            <p></p>
            <h3 className='disp'>Year:</h3>
            <input type = "text" id = "location"></input>
        </div>
        <button className='mlotbtn'>Update</button>
      </div>
    )
  }
}
