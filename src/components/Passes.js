import React, { Component } from 'react';
import "./passes_style.css";
import Qr_page from './Qr_page';
import { Link } from 'react-router-dom';


const Passes = () => {
  return (
    <div>
      <>
      <div>
        <span>
          <div className='pass'>
            <div>
            <p id = "l1">Location : </p>
            <p id = "location">{this.props.location}</p>  
            </div>
            <div>
            <p id = "v1">Validity :</p>
            <p id = "validity"> {this.props.validity}</p> 
            </div> 
            <div>
            <p id = "t1">Type : </p>    
            <p id = "type">{this.props.type}</p>
            </div>
            <div>
              <button onClick={this.onClickHandler} type = "button" value = "validate" style={{backgroundColor: "orange",marginLeft:"130px",marginBottom: "40px", }}><Link to = "/qr">Validate</Link></button>
            </div>
          </div>
        </span>
      </div>
      </>
      
    </div>
  )
}

export default Passes

