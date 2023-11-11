import { QRCodeCanvas } from 'qrcode.react'
import React, { Component } from 'react'  
import { useLocation } from 'react-router-dom'


const Qr_page = () => {

  const location = useLocation();
  const {id} = location.state;
  return (
    <div>
            <div className='box2'>
              <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>Scan the QR code</u></h1>
              <QRCodeCanvas value = {id} id = "qr"></QRCodeCanvas>
            </div>
    </div>
  )
}

export default Qr_page

