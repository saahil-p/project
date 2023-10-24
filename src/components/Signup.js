import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 className='sup'><b><u>Signup</u></b></h1>
        <h3 className='c_acc' style={{color:"black", fontFamily:"timesnewroman"}}><u>Create an account</u></h3>
        <div className='pass'>
        <div className='Grid' id = "sup">
            <input type='text' id = "sin" className='sin' placeholder='Name'></input>
            <input type ="email" id = 'spem' className='spem sin' placeholder='Email'></input>
            <input type = "password" id = "spwd"className='sin' placeholder='Password'></input>
            <input type = "password" id = "scpwd" className='sin' placeholder='Confirm Password'></input>
        </div>
            <button type='submit' className='lginbtn' id = "supbtn" value={"Submit"}><Link to = '/' className='link'><b>Signup</b></Link></button>
        </div>
      </div>
    )
  }
}
