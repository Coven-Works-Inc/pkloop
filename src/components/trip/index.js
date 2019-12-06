import React from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'

import './trips.css'

const index = () => {
  return (
    <HeaderFooter>
      <Banner title='List Your Trip' />
      <section id='list_form'>
        <div className='trip_container'>
          <div className='trip_field'>
            <input type='text' placeholder='From: City, Country' />
          </div>
          <div className='trip_field'>
            <input type='text' placeholder=' To:   City, Country' />
          </div>
          <div className='trip_field'>
            <input type='text' placeholder='Arrival: dd/mm/yyyy' />
          </div>
          <div className='trip_field'>
            <input
              type='text'
              placeholder='Add Stopovers (stopovers will increase your chances of getting connections)                                                                                                       --'
            />
          </div>
          <div className='dup'>
            <input type='text' placeholder='Stopover 1  City, Country' />

            <input type='text' placeholder='Stopover 2  City, Country' />
          </div>
          <div className='dup'>
            <input type='text' placeholder='Stopover 3   City, Country' />

            <input type='text' placeholder='Stopover 4   City, Country' />
          </div>
          <div className='trip_field'>
            <input
              type='text'
              placeholder='Size you are willing to transport, Extra large(E.g Big box, electronics)'
            />
          </div>
          <div className='trip_field'>
            <input
              type='text'
              placeholder='Weight of parcel you are willing to transport 0 - 5lbs'
            />
          </div>
          <div className='trip_field'>
            <input type='text' placeholder='Means of transportation Flight' />
          </div>
          <div className='trip_field'>
            <textarea placeholder='Additional information' />
          </div>
          <button className='btnQ'>POST YOUR TRIP</button>
        </div>
      </section>
    </HeaderFooter>
  )
}

export default index
