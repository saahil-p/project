import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pay_success extends Component {
    fn = ()=>{
        setTimeout(()=>{
            <Link to = "/clgin"></Link>
        },1000)
    }
  render() {
    return (
      <div className='box2' id="paysuc">
        <h2 className='text-center'style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}>Payment Successful! Redirecting to <Link to = '/clgin' className='link'>home....</Link></h2>
      </div>
    )
  }
}
