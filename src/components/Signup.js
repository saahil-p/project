import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 className='sup'><b><u>Signup</u></b></h1>
        <h3 className='c_acc'><u>Create an account</u></h3>
        <div className='Grid'>
            <input type='text' id = "sin" className='sin' placeholder='Name'></input>
            <input type ="email" id = 'spem' className='spem sin' placeholder='Email'></input>
            <input type = "password" id = "spwd"className='sin' placeholder='Password'></input>
            <input type = "password" id = "scpwd" className='sin' placeholder='Confirm Password'></input>
            <button type='submit' className='lginbtn' value={"Submit"}><b>Signup</b></button>
        </div>
      </div>
    )
  }
}
