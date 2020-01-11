import React from 'react'
// import HeaderFooter from '../headerFooter'
// import Banner from '../common/banner'
// import Card from '../common/card'
// import travelData from '../../travelers.json'

import ProfilePicture from '../../assets/default-picture.jpg'
// import Jephtah from '../../assets/jephtah.JPG'

import './travel.css'

const Travelers = props => {
  const { travelers } = props

  //This function helps the user filter by location
  const getLocation = e => {
    let keyword = e.target.value.toUpperCase()
    const filtered = travelers.filter(traveler => {
      return traveler.location.toUpperCase().indexOf(keyword) > -1
    })

    this.setState({
      filtered
    })
  }

  //This function helps the user filter by destination
  const getDestination = e => {
    let keyword = e.target.value.toUpperCase()
    const filtered = travelers.filter(traveler => {
      return traveler.destination.toUpperCase().indexOf(keyword) > -1
    })

    this.setState({
      filtered
    })
  }

  return (
    <div id='travel-container'>
      {travelers === undefined ? (
        <h3>Loading...</h3>
      ) : travelers.length === 0 ? (
        <h3>No Traveler found</h3>
      ) : (
            travelers.map((traveler, key) => (
              <div key={key} className='travel-card'>
                <div className='card-left'>
                  <img
                    src={ProfilePicture}
                    alt=''
                    style={{
                      height: '150px',
                      maxWidth: '100%'
                    }}
                  />
                  <p style={{ marginTop: '2px' }}>{traveler.username}</p>

                  <p onClick={() => props.connect(traveler)} className='button'>connect</p>
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
                    <span className='gray'>Means of transportation: </span>{' '}
                    {traveler.transport}
                  </p>
                  <p>
                    <span className='gray'>Size of parcel willing to carry: </span>{' '}
                    {traveler.parcelSize}
                  </p>
                  <p>
                    <span className='gray'>
                      Weight of parcel willing to carry:{' '}
                    </span>{' '}
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
