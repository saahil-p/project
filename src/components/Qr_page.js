import { QRCodeCanvas } from 'qrcode.react'
import React, { Component } from 'react'  

export default class Qr_page extends Component {
  render() {
    return (
      <div className='box2'>
        <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>Scan the QR code</u></h1>
        <QRCodeCanvas value = "this_has_to_be_filled_from_mongo_db" id = "qr"></QRCodeCanvas>
      </div>
    )
  }
}
