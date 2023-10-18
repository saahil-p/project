import React, { Component } from 'react';
import Passes from './Passes';
import "./passes_style.css";

export default class Cust_lgin extends Component {
  render() {
    return (
        <>
        <div className='box'>
          <h2 style={{textAlign: "center"}}><u>Active Passes</u></h2>
            <div className = "row">
              <div className='col'>
                <Passes location = "PESU" validity = "Day" type = "2 Wheeler" position = "top-left"/>
              </div>
              <div className = "col">
                <Passes location = "Mall_1" validity = "Week" type = "4 Wheeler" position = "top-right"/>
              </div>
            </div>
            <div className='row'>
              <div className = "col">
              <Passes location = "Lot_32" validity = "Month" type = "2 Wheeler" position = "bottom-left"/>
              </div>
              <div className='col'>
                <Passes location = "Office" validity = "Year" type = "4 Wheeler" position = "bottom-right"/>
              </div>
            </div>
        </div>
        </>
    )
  }
}
