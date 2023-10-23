import React, { Component } from 'react';
import Vio from './Vio';
import "./passes_style.css";

export default class Cust_lgin extends Component {
  render() {
    return (
        <>
        <div className='box'>
          <h2 style={{textAlign: "center"}}><u>Active Vio</u></h2>
            <div className = "row">
              <div className='col'>
                <Vio btntxt = "View" location = "PESU" validity = "Day" type = "Parked in common area" position = "top-left"/>
              </div>
              <div className = "col">
                <Vio btntxt = "View" location = "Mall_1" validity = "Week" type = "Parked in two lots" position = "top-right"/>
              </div>
            </div>
            <div className='row'>
              <div className = "col">
              <Vio btntxt = "View" location = "Lot_32" validity = "Month" type = "Parked outside the designated place" position = "bottom-left"/>
              </div>
              <div className='col'>
                <Vio btntxt = "View" location = "Office" validity = "Year" type = "Blocking the entrace/exit" position = "bottom-right"/>
              </div>
            </div>
        </div>
        </>
    )
  }
}
