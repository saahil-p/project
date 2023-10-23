import React, { Component } from 'react'

export default class U_slots extends Component {
  render() {
    return (
      <div className='box2'>
        <h3 style={{color:"white",display:"inline-block"}}>Number of slots: </h3>
        <p id = "location">{this.props.slots}</p>
        <p></p>
        <h3 style={{color:"white",display:"inline-block"}}>Number of slots: </h3>
        <input type = "text" id = "location"></input>
        <button className='mlotbtn'>Update Number of Slots</button>
      </div>
    )
  }
}
