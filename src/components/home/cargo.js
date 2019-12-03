import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className='cargo_items'>
              <h3>LIST YOUR SHIPMENT DETAILS</h3>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
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
