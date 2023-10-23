import React, { Component } from 'react'

export default class Managelot extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 className='text-center'><b><u>Manage Lot</u></b></h1>
        <a href='/' style={{display:"block"}}>Update Availability</a>
        <a href='/' style={{display:"block"}}>Report Incorrect Parking</a>
        <a href='/' style={{display:"block"}}>Modify Price</a>
      </div>
    )
  }
}
