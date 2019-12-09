import React from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'
import Card from '../common/card'

import Jeph from '../../assets/Jeph.jpg'
import Jephtah from '../../assets/jephtah.JPG'

import './travel.css'

const Travelers = () => {
  return (
    <HeaderFooter>
      <Banner title='Available Travelers' />
      <section id='travel-container'>
        <div className='card'>
          <div className='card-left'>
            <img
              src={Jeph}
              alt=''
              style={{
                height: '140px',
                maxWidth: '100%',
                background: 'chocolate'
              }}
            />
            <p style={{ marginTop: '2px' }}>Jamie HelfsBurger</p>

            <p className='button'>connect</p>
          </div>
          <div className='card-right'>
            <h3>From: Nairobi, Kenya</h3>
            <h3>To: London, UK</h3>
            <p>Arrival date: Nov 13, 2019</p>
            <p>Stopovers: Nov 13, 2019</p>
            <p>Means of transportation: Train</p>
            <p>Size of parcel willing to carry: Large</p>
            <p>Weight of parcel willing to carry: 0-5lbs.</p>
          </div>
        </div>
        <div className='card'>
          <div className='card-left'>
            <img
              src={Jephtah}
              alt=''
              style={{
                height: '140px',
                maxWidth: '100%',
                background: 'chocolate'
              }}
            />
            <p style={{ marginTop: '5px' }}>Jerome Tepon</p>

            <p className='button'>connect</p>
          </div>
          <div className='card-right'>
            <h3>From: Accra, Ghana</h3>
            <h3>To: Ontario, Canada</h3>
            <p>Arrival date: Jan 12, 2019</p>
            <p>Stopovers: Johannesburg, S.A </p>
            <p>Means of transportation: Flight</p>
            <p>Size of parcel willing to carry: Small</p>
            <p>Weight of parcel willing to carry: 0-2lbs.</p>
          </div>
        </div>
      </section>
    </HeaderFooter>
  )
}

export default Travelers
