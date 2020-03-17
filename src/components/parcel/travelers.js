import React, { Fragment } from 'react'
// import Img from 'react-image'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {  createReservation } from '../../actions/travelerActions'
import ProfilePicture from '../../assets/profilepic.png'

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
      {console.log(props.user)}
      {travelers === undefined ? (
        <h3>Loading...</h3>
      ) : travelers.length === 0 ? (
        <div>
          <div>
            <h2>
              <b>There is no traveler going your route currently.</b>
            </h2>
          </div>
          <br />
          <div>
            <h4>
              To get a notification when there is a traveler available for your
              route <br />
            </h4>
            {!props.user.isAuthenticated ? 
                            <div>
                            <Link to='/register'>
                              <button
                                style={{
                                  backgroundColor: '#00bdbe',
                                  color: '#fff',
                                  padding: '0.7rem 1rem',
                                  fontSize: '1.2rem',
                                  borderRadius: '0.3rem'
                                }}
                              >
                                Register
                              </button>{' '}
                            </Link>
                            or{' '}
                            <Link to='/login'>
                              <button
                                style={{
                                  backgroundColor: '#00bdbe',
                                  color: '#fff',
                                  padding: '0.7rem 2rem',
                                  fontSize: '1.2rem',
                                  borderRadius: '0.3rem'
                                }}
                              >
                                Login
                              </button>{' '}
                            </Link>
                          </div> : 
                          <button
                          style={{
                            backgroundColor: '#00bdbe',
                            color: '#fff',
                            padding: '0.7rem 2rem',
                            fontSize: '1.2rem',
                            borderRadius: '0.3rem'
                          }}
                          onClick={() => props.makeReservation()}
                        >
                          Send request
                        </button>

            }

          </div>
        </div>
      ) : (
        travelers.map((traveler, key) => (
          <div key={key} className='travel-card'>
            <div className='card-left'>
              {/* <Img
                src={traveler.photo ? traveler.photo : ProfilePicture}
                alt=''
                style={{
                  height: '150px',
                  maxWidth: '100%'
                }}
              /> */}
              <p style={{ marginTop: '2px' }}>{traveler.username}</p>

              <p onClick={() => props.connect(traveler)} className='button'>
                connect
              </p>
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
const mapStateToProps = state => ({
  user: state.auth,
})
export default connect(mapStateToProps, { createReservation })(Travelers)
