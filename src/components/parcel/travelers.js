import React from 'react'
// import HeaderFooter from '../headerFooter'
// import Banner from '../common/banner'
// import Card from '../common/card'
// import travelData from '../../travelers.json'

import Jeph from '../../assets/Jeph.jpg'
// import Jephtah from '../../assets/jephtah.JPG'

import './travel.css'
import './parcel.css'

const Travelers = props => {
  const { travelers } = props
  console.log(travelers)

  return (
    <div>
      {/* {travelers === undefined ? (
        <h3>Loading...</h3>
      ) : travelers === [] ? (
        'No Traveler found'
      ) : (
        getTravelers()
      )} */}
      {travelers === undefined ? (
        <h3>Loading...</h3>
      ) : travelers.length === 0 ? (
        <h3>No Traveler found</h3>
      ) : (
        travelers.map((traveler, key) => (
          <div key={key} className='card'>
            <div className='card-left'>
              <img
                src={Jeph}
                alt=''
                style={{
                  height: '150px',
                  maxWidth: '100%'
                }}
              />
              <p style={{ marginTop: '2px' }}>{traveler.name}</p>

              <p className='button'>connect</p>
            </div>
            <div className='card-right'>
              <h3>
                <span className='gray'>From: </span>{' '}
                {`${traveler.locationCity}, ${traveler.locationCountry}`}
              </h3>
              <h3>
                <span className='gray'>To: </span>{' '}
                {`${traveler.destinationCity}, ${traveler.destinationCountry}`}
              </h3>
              <p>
                <span className='gray'>Arrival Date: </span>{' '}
                {traveler.arrivalDate.split('T')[0]}
              </p>
              <p>
                <span className='gray'>Stopovers: </span>{' '}
                {traveler.stopOvers ? traveler.stopOvers : 'None'}
              </p>
              <p>
                <span className='gray'>Means of transportation</span>{' '}
                {traveler.transport}
              </p>
              <p>
                <span className='gray'>Size of parcel willing to carry</span>{' '}
                {traveler.parcelSize}
              </p>
              <p>
                <span className='gray'>Weight of parcel willing to carry</span>{' '}
                {traveler.parcelWeight}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Travelers
