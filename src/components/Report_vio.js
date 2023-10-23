import React, { Component } from 'react'

export default class Report_vio extends Component {
  render() {
    return (
      <div className='box2'>
        <h3 style={{display:"inline-block"}}>Vehicle Number: </h3>
        <input type = "text" placeholder='Enter Vehicle number' id = "location" required style={{marginLeft:"195px"}}></input>
        <p></p>
        <h3 style={{display:"inline-block"}}>Type of Violation:</h3>
        <select id = "location" required style={{marginLeft:"190px",height:"30px"}}>
            <option>Parked in two lots</option>
            <option>Parked outside the designated place</option>
            <option>Blocking the entrace/exit</option>
            <option>Parked in common area</option>
        </select>
        <p></p>
        <h3 style={{display:"inline-block"}}>Upload supporting documents:</h3>
        <input type = "file" id = "location" required></input>

        <button className='mlotbtn'><b>Report</b></button>
      </div>
    )
  }
}
