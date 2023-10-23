import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Err extends Component {
  render() {
    return (
      <div className='box2'>
        <h2>We are sorry you feel so!</h2>
        <h4>Our executive will review this and update you about the same!</h4>
        <p>Redirecting to <Link to = "/clgin">home...</Link></p>
      </div>
    )
  }
}
