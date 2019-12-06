import React from 'react'
import HeaderFooter from '../headerFooter'

import './trips.css'

const index = () => {
  return (
    <HeaderFooter>
      <section id='banner'>
        <div class='bannertext'>
          <h2> List Your Trip </h2>
        </div>
      </section>
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
              placeholder='Add Stopovers(stopovers will increase your chances of getting connections)                                                                                                      --'
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
            <input type='text' />
          </div>
          <div className='trip_field'>
            <input type='text' />
          </div>
          <div className='trip_field'>
            <input type='text' />
          </div>
          <div className='trip_field'>
            <input type='text' />
          </div>
          <div className='trip_field'>
            <textarea />
          </div>
          <button className='btnQ'>POST YOUR TRIP</button>
        </div>
      </section>
    </HeaderFooter>
  )
}

export default index
