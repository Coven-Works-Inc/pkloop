import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='cta_send'>
      <div className='cta_content'>
        <div>
          <p className='main'>Ready to send or deliver a parcel?</p>
        </div>
        <div className='cta_box'>
          <Link to='/parcel' style={{ textDecoration: 'none' }}>
            <button className='cta_items'>LIST A PARCEL</button>
          </Link>
          <Link to='/trips' style={{ textDecoration: 'none' }}>
            <button className='cta_items'>LIST YOUR TRIP</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cta
