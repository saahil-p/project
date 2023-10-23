import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Managelot extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 className='text-center'><b><u>Manage Lot</u></b></h1>
        <Link to='/uslots' style={{display:"block"}}>Update Availability</Link>
        <Link to='/rvio' style={{display:"block"}}>Report Incorrect Parking</Link>
        <Link to='/urate' style={{display:"block"}}>Modify Price</Link>
      </div>
    )
  }
}
