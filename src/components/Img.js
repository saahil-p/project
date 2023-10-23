import React, { Component } from 'react'
import v1 from "./v1.png"
import { Link } from 'react-router-dom'

export default class Img extends Component {
  render() {
    return (
      <div className='box2'>
        <img src= {v1} alt="some text " className = "img-fluid" width={"450px"} height={"200px"}/>
        <h3>Think we made a mistake? <Link to = "/err">Let us know</Link></h3>
      </div>
    )
  }
}
