import { QRCodeCanvas } from 'qrcode.react'
import React, { Component } from 'react'

export default class Qr_page extends Component {
  render() {
    return (
      <div className='box2'>
        <QRCodeCanvas value = "this_has_to_be_filled_from_mongo_db"></QRCodeCanvas>
      </div>
    )
  }
}
