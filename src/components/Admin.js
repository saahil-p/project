import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div className='box2 ahp'>
                <h1 className='text-center lo'><u>Lot Occupancy</u></h1>
                <h3 className='day' style={{ display: "inline-block"}}>Day:</h3>
                <p className='rect' id="location" style={{marginLeft:"50px"}}>{this.props.day}</p>
                <p style={{ display: "block" }}></p>
                <h3 className='day' style={{ display: "inline-block" }}>Month:</h3>
                <p className='rect' id="location">{this.props.month}</p>
                <p style={{ display: "block" }}></p>
                <h3 className='day' style={{ display: "inline-block" }}>Year:</h3>
                <p className='rect' id="location" style={{marginLeft:"48px"}}>{this.props.year}</p>
                <p style={{ display: "block" }}></p>
                {/* props needs to be brought from the mongodb */}
                <button className='mlotbtn'>Manage Lot</button>
            </div>
        )
    }
}
