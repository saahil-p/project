import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Managelot extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>Manage Lot</u></h1>
        <div>
          <form>
          <div class = 'text-center'>
          <select id = "s3" >
              <option value = "upi">Update Availability</option>
              <option value = " ri">Report Incorrect Parking</option>
              <option value = "mp">Modify Price</option>
            </select>
          </div> 
        </form>
      </div>
  </div>
    )
  }
}
