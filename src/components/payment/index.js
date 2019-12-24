import React from 'react'
import './payment.css'

const Payment = () => {
  return (
    <div className='payment-container'>
      <div className='payment-box'>
        <div className='payment-logo'>
          <img
            src={require('../../assets/payment-logo.png')}
            className='logo'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Payment
