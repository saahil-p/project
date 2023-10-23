import React, { Component } from 'react'
import './passes_style.css'

export default class Landing extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 style={{textAlign: "center",padding:"100px"}}><b><u>Login</u></b></h1>
        <div className='usn'>
          <h3 className = "usn_heading">Username:</h3>
          <input type = 'text' className='usn_inp'></input>
        </div>
        <div className='usn'>
          <h3 className = "usn_heading">Password:</h3>
          <input type = 'password' className='usn_inp'></input>
        </div>
        <div className='lgin'>
          <button type='submit' className='lginbtn' value={"Submit"}><b>Login</b></button>
          <p className='s'>Don't have an account?<a href='#'>Sign Up</a></p>
        </div>
      </div>
    )
  }
}
