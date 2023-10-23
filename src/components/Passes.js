import React, { Component } from 'react';
import "./passes_style.css";
import { Link } from 'react-router-dom';
import Qr_page from './Qr_page';

export default class Passes extends Component {
  onClickHandler = () => {
    <Qr_page /> //Figure out why this isnt working.
  }

  render() {
    return (
      <>
        <div className={this.props.position}>
          <span>
            <div className='pass'>
              <div>
                <p id="l1">Location : </p>
                <p id="location">{this.props.location}</p>
              </div>
              <div>
                <p id="v1">Validity :</p>
                <p id="validity"> {this.props.validity}</p>
              </div>
              <div>
                <p id="t1">Type : </p>
                <p id="type">{this.props.type}</p>
              </div>
              <div>
                <button onClick={this.onClickHandler} type="button" value="validate" style={{ backgroundColor: "orange", marginLeft: "170px", marginBottom: "40px" }}>{this.props.btntxt}</button>
              </div>
            </div>
          </span>
        </div>
      </>
    )
  }
}
