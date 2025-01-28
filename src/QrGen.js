import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrGen = () => {
    const [value,setValue] = useState()
    const [qr,setQr] = useState()
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{height:500}}>
        <h2>QR Code Generator</h2>
        <div className="d-flex mt-4 gap-3 align-items-center">
        <input type="text" onChange={(e)=>setValue(e.target.value)}  />
        <button className='btn btn-success' onClick={()=>setQr(value)}>Create</button>
        <button className='btn btn-danger' onClick={()=>setQr()}>Clear</button>
        </div>
        <br />
       {qr && <QRCode
        className='mt-4'
        size={100}
        value={value}
        />}
    </div>
  )
}

export default QrGen