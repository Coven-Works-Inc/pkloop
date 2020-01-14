import React, { useState, useEffect } from 'react'
// import { postParcel } from '../../actions/parcelActions'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchShippers } from '../../actions/travelerActions'
import countries from '../../countries.json'
import cities from '../../world-cities_json.json'

import Shippers from './shippers'
import Modal from '../common/modal'

import './parcel.css'
import travelData from '../../travelers.json'
import countriesData from '../../countries.json'
import { fetchTravelers, getTravelers } from '../../actions/travelerActions';

const Parcel = props => {
  const [state, setState] = useState({
    locationCountry: '',
    locationCity: '',
    destinationCountry: '',
    destinationCity: '',
    parcelSize: '',
    parcelWeight: 4,
    fromCountry: '',
    additionalInfo: '',
    travelers: travelData,
    filteredLocation: undefined,
    filteredDestination: [],
    countries: countriesData,
    fromcities: [],
    fromCity: '',
    toCity: '',
    tocities: [],
    parcelCost: 24.99,
    modalOpen: false,
    index: 0,
    isAuthenticated: false,
    isLocal: true,
    travelerData: {},
    runParcelCost: null
  })
  useEffect(() => {
    props.fetchShippers()
  }, [])
  const onFromCountryChangeHandler = e => {
    const selectedCountry = countries.filter(
      country => country.name === e.target.value
    )
    const city = cities.filter(city => city.country === selectedCountry[0].name)
    setState({
      ...state,
      [e.target.name]: e.target.value,
      fromcities: city
    })
  }
  const onToCountryChangeHandler = e => {
    const selectedCountry = countries.filter(
      country => country.name === e.target.value
    )
    const city = cities.filter(city => city.country === selectedCountry[0].name)
    setState({
      ...state,
      [e.target.name]: e.target.value,
      tocities: city
    })
  }
  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = e => {
    setState({
      ...state,
      modalOpen: true
    })
    e.preventDefault()
  }

  const handleConnect = (traveler) => {
    // console.log(traveler)
    addTravelerToState(traveler)
    console.log(traveler)
    if (!props.user.isAuthenticated) {
      setState({
        ...state,
        modalOpen: true,
        isAuthenticated: false
      })
    } else {
      handleParcelCost(traveler)
      props.getTravelers({
        senderCost: state.parcelCost,
        senderWeight: state.parcelWeight,
        ...traveler
      })
    }
  }
  const addTravelerToState = traveler => {
    setState({
      ...state,
      travelerData: traveler
    })
  }
  const handleParcelCost = (traveler) => {
    const localMultiplier = 1.5
    const intlMultiplier = 5.99
    const parcelWeight = parseInt(state.parcelWeight)
    if (traveler.locationCountry && traveler.destinationCountry) {
      if (traveler.locationCountry === 'United States' || traveler.locationCountry === 'Canada' || traveler.destinationCountry === 'United States' || traveler.destinationCountry === 'Canada') {
        if (parcelWeight <= 5) {
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            parcelCost: 14.99
          })
        } else {
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            parcelCost: (14.99 + (parcelWeight * localMultiplier)).toFixed(2)
          })
        }
      } else {
        if (parcelWeight <= 5) {
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            isLocal: false,
            parcelCost: 24.99
          })
        } else {
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            isLocal: false,
            parcelCost: (parcelWeight * intlMultiplier).toFixed(2)
          })
        }
      }
    } else {
      if (parcelWeight <= 5) {
        setState({
          ...state,
          modalOpen: true,
          isAuthenticated: true,
          isLocal: false,
          parcelCost: 24.99
        })
      } else {
        setState({
          ...state,
          modalOpen: true,
          isAuthenticated: true,
          isLocal: false,
          parcelCost: (parcelWeight * intlMultiplier).toFixed(2)
        })
      }
    }
  }
  // fetchCountries = () => {
  //   let countriesList = ''
  //   this.state.countries.map((country, index) => {
  //     countriesList += <option value={country[index]}>{country[index]}</option>
  //   })
  //   return countriesList
  // }

  const toggleModal = () => {
    setState({
      ...state,
      modalOpen: !state.modalOpen
    })
  }
  // const fetchCities = (type, country) => {
  //   if (type === 'from') {
  //     this.setState({
  //       fromcities: [
  //         {
  //           name: 'New York City',
  //           code: 'nyc'
  //         },
  //         {
  //           name: 'Washington',
  //           code: 'dc'
  //         },
  //         {
  //           name: 'Texas',
  //           code: 'tx'
  //         }
  //       ]
  //     })
  //   }
  // }

  const {
    shippers: { shippers }
  } = props

  // {
  //   props.shippers.shippers &&
  //   const {
  //     shippers: { shippers }
  //   } = props)
  // }
  return (
    <HeaderFooter>
      <div className='maincontainer send-parcel'>
        <h1>Send Parcel By Ship</h1>
        <div className='py-2 form-group'>
          <form onSubmit={submitHandler}>
            <div className='country_div'>
              <div>
                <label>From (Country)</label>
                <select
                  name='fromCountry'
                  value={state.fromCountry}
                  onChange={onFromCountryChangeHandler}
                >
                  {countries.map((country, index) => (
                    <option value={country.name} key={index}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>From (City)</label>
                <select
                  name='fromCity'
                  value={state.fromCity}
                  onChange={onChangeHandler}
                >
                  <option value=''></option>
                  {state.fromcities.sort().map((city, index) => (
                    <option value={city.name} key={index}>
                      {city.name},{city.subcountry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='country_div'>
              <div>
                <label>To (Country)</label>
                <select
                  name='toCountry'
                  value={state.toCountry}
                  onChange={onToCountryChangeHandler}
                >
                  {countries.map((country, index) => (
                    <option value={country.name} key={index}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>To (City)</label>
                <select name='toCity' value={state.toCity}>
                  <option value=''></option>
                  {state.tocities.sort().map((city, index) => (
                    <option value={city.name} key={index}>
                      {city.name},{city.subcountry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='country_div'>
              <div>
                <label>Size of your parcel</label>
                <select
                  name='parcelSize'
                  value={state.parcelSize}
                  onChange={onChangeHandler}
                >
                  <option value='extra large'>
                    Extra Large (E.g Big box, electronics)
                  </option>
                  <option value='large'>Large (E.g Laptops)</option>
                  <option value='medium'>Medium (E.g drink packs)</option>
                  <option value='small'>Small (E.g mobile phone)</option>
                </select>
              </div>
              <div>
                <label>Weight of your parcel</label>
                <select
                  name='parcelWeight'
                  value={state.parcelWeight}
                  onChange={onChangeHandler}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                </select>
              </div>
            </div>

            <button className='btnQ' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* {props.shippers.shippers && (
        <Shippers travelers={props.shippers.shippers} toggle={toggleModal} />
      )} */}

      <Shippers travelers={state.filteredLocation ? state.filteredLocation : shippers} toggle={toggleModal} connect={handleConnect}  />

      <Modal show={state.modalOpen}
        onClose={toggleModal}>
        {state.isAuthenticated &&
          <div>
            <h2>Are you sure you want to send {state.parcelWeight} pounds of weight? Costs ${state.parcelCost}</h2>
            <br />
            {/*  */}
            <div className="button-group">
              <button className="btnQ medium" onClick={() => props.history.push({
                pathname: '/dashboard/chat',
                parcelCost: state.parcelCost,
                travelerData: state.travelerData
              })}>Yes, Continue</button>
              <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>No, Change weight</button>
            </div>
            {
              !state.isLocal &&
              <small>International pricing applies. See <Link to='/pricing' target='_blank' style={{ color: '#00bdbe', cursor: 'pointer', textDecoration: 'none' }}>Pricing Guide</Link></small>
            }
          </div>}
        {!state.isAuthenticated &&
          <div>
            <h2>Please login to connect with a traveller</h2>
            <br />
            <div className="button-group">
              <button className='btnQ medium' onClick={() => props.history.push('/login')}>Yes, Go To Login</button>
              <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>No, Stay on This Page</button>
            </div>
          </div>}
      </Modal>
    </HeaderFooter>
  )
}

{
}

const mapStateToProps = state => ({
  shippers: state.shippers,
  user: state.auth
})

export default connect(mapStateToProps, { fetchShippers, getTravelers })(Parcel)
