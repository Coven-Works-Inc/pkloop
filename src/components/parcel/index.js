import React, { useState, useEffect } from 'react'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { fetchTravelers } from '../../actions/travelerActions'
import Travelers from './travelers'

import './parcel.css'
import travelData from '../../travelers.json'
import countriesData from '../../countries.json'

const Parcel = props => {
  const [state, setState] = useState({
    locationCountry: '',
    locationCity: '',
    destinationCountry: '',
    destinationCity: '',
    parcelSize: '',
    parcelWeight: '',
    additionalInfo: ''
  })

  useEffect(() => {
    props.fetchTravelers()
  }, [])

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  const fetchCities = (type, country) => {
    if (type === 'from') {
      this.setState({
        fromcities: [
          {
            name: 'New York City',
            code: 'nyc'
          },
          {
            name: 'Washington',
            code: 'dc'
          },
          {
            name: 'Texas',
            code: 'tx'
          }
        ]
      })
    }
  }

  // componentDidUpdate (prevProps, prevState) {
  //   if (prevState.fromCountry !== this.state.fromCountry) {
  //     console.log('you updated the base country')
  //     this.fetchCities('from', this.state.fromCountry)
  //     // call a function/endpoint/action that gets the list of cities
  //   }

  //   if (prevState.toCountry !== this.state.toCountry) {
  //     console.log('you updated the destination country')
  //     // call a function/endpoint/action that gets the list of cities
  //   }
  // }

  // const { travelers, countries } = state

  // const { countries } = state

  const {
    travelers: { travelers }
  } = props

  return (
    <HeaderFooter>
      <div className='maincontainer send-parcel'>
        <h1>Find Travellers</h1>
        <div className='py-2 form-group'></div>
      </div>
      <Travelers travelers={travelers} />
    </HeaderFooter>
  )
}

const mapStateToProps = state => ({
  travelers: state.travelers
})

export default connect(mapStateToProps, { fetchTravelers })(Parcel)
