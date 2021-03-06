import React from 'react'
import { Link } from 'react-router-dom'
import './cargo.css'

const Cargo = () => {
  return (
    <div id='cargo'>
      <div className='cargo_case'>
        <div>
          <h2>For Containers and Cargo Shippers</h2>
          <p>
            List your shipment details for free every month and connect with a
            pool
            <br /> of potential senders on our platform.
          </p>
        </div>
        <div className='cargo_buttons'>
          <Link to='/trips' style={{ textDecoration: 'none' }}>
            <div className='cargo_items'>
              <h3>LIST YOUR TRIP</h3>
            </div>
          </Link>
          <Link to='/shippers' style={{ textDecoration: 'none' }}>
            <div className='cargo_items'>
              <h3>SEE AVAILABLE SHIPPERS</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cargo
