import React, { useState, useEffect } from 'react'
// import { postParcel } from '../../actions/parcelActions'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { fetchTravelers } from '../../actions/travelerActions';
import { Link } from 'react-router-dom'

import countries from '../../countries.json'
import cities from '../../world-cities_json.json';

import Travelers from './travelers'
import Modal from '../common/modal'
// import Payment from '../payment'

import './parcel.css'
import travelData from '../../travelers.json'
import countriesData from '../../countries.json'

const Parcel = props => {
  console.log(props)

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
    parcelCost: 0,
    modalOpen: false,
    index: 0,
    isAuthenticated: false,
    travelerData: {}
  })
  useEffect(() => {
    props.fetchTravelers()
  }, [])
  const onFromCountryChangeHandler = e => {
    const selectedCountry = countries.filter(country => country.name === e.target.value)
    const city = cities.filter(city => city.country === selectedCountry[0].name)
    setState({
      ...state,
      [e.target.name]: e.target.value,
      fromcities: city,
      filteredLocation: travelers.filter(traveler => traveler.locationCountry === e.target.value)
    })
    handleParcelCost()
  };
  const onToCountryChangeHandler = e => {
    const selectedCountry = countries.filter(country => country.name === e.target.value)
    const city = cities.filter(city => city.country === selectedCountry[0].name)
    setState({
      ...state,
      [e.target.name]: e.target.value,
      tocities: city,
      filteredLocation: travelers.filter(traveler => traveler.destinationCountry === e.target.value && (state.fromCountry === traveler.locationCountry || ''))
    })
    handleParcelCost()
  }
  const onChangeHandler = e => {
    if (e.target.name === 'fromCity') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => traveler.locationCity === e.target.value && traveler.locationCountry === state.fromCountry)
      })
      handleParcelCost()
    }
    if (e.target.name === 'toCity') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => traveler.destinationCity === e.target.value && traveler.locationCountry === state.fromCountry && traveler.locationCity === state.fromCity)
      })
      handleParcelCost()
    };
    if (e.target.name === 'parcelSize') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => traveler.parcelSize === e.target.value)
      })
      handleParcelCost()
    };
    if (e.target.name === 'parcelWeight') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => traveler.parcelWeight === e.target.value)
      })
      handleParcelCost()
    }
  }
  const submitHandler = e => {
    setState({
      ...state,
      modalOpen: true
    })
    e.preventDefault()
  }

  const addTravelerToState = traveler => {
    setState({
      ...state,
      travelerData: traveler
    })
  }

  const handleConnect = (traveler) => {
    // console.log(traveler)
    addTravelerToState(traveler)

    if (!props.user.isAuthenticated) {
      setState({
        ...state,
        modalOpen: true,
        isAuthenticated: false
      })
    } else {
      setState({
        ...state,
        modalOpen: true,
        isAuthenticated: true
      })
    }
    console.log(state.travelerData)
  }

  const handleParcelCost = () => {
    const localMultiplier = 1.5
    const intlMultiplier = 5.99
    if (state.locationCity && state.destinationCity) {
      if ((state.locationCountry === 'United States' || state.locationCountry === 'Canada') && (state.destinationCountry === 'United States' || state.destinationCountry === 'Canada')) {
        if (state.parcelWeight <= 5) {
          setState({
            ...state,
            parcelCost: 14.99
          })
        } else {
          setState({
            ...state,
            parcelCost: (14.99 + (state.parcelWeight * localMultiplier))
          })
        }
      } else {
        if (state.parcelWeight <= 5) {
          setState({
            ...state,
            parcelCost: 24.99
          })
        } else {
          setState({
            ...state,
            parcelCost: (state.parcelWeight * intlMultiplier)
          })
        }
      }
    } else {
      setState({
        ...state,
        parcelCost: null
      })
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
    travelers: { travelers }
  } = props
  console.log(travelers)
  console.log(state.parcelWeight)

  return (
    <HeaderFooter>
      <div className='maincontainer send-parcel'>
        <h1>Find Travelers</h1>
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
                    <option value={country.name} key={index}>{country.name}</option>
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
                  <option value=""></option>
                  {state.fromcities.sort().map((city, index) => (
                    <option value={city.name} key={index}>{city.name},{city.subcountry}</option>
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
                    <option value={country.name} key={index}>{country.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>To (City)</label>
                <select
                  name='toCity'
                  value={state.toCity}
                  onChange={onChangeHandler}
                >
                  <option value=""></option>
                  {state.tocities.sort().map((city, index) => (
                    <option value={city.name} key={index}>{city.name}, {city.subcountry}</option>
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

            <button className='btnQ' type="submit">Find Travellers</button>
          </form>
        </div>
      </div>


      <Travelers travelers={state.filteredLocation ? state.filteredLocation : travelers} toggle={toggleModal} connect={handleConnect} />

      <Modal show={state.modalOpen}
        onClose={toggleModal}>
        {(state.isAuthenticated && !(state.locationCity && state.destinationCity)) &&
          <div>
            <h2>Are you sure you want to send {state.parcelWeight} pounds of weight? Costs ${state.parcelCost}</h2>
            <br />
            {/*  */}
            <div className="button-group">
              <button className="btnQ medium" onClick={() => props.history.push({
                pathname: '/dashboard/chat',
                parcelCost: state.parcelCost,
                component: 'Chat'
              })}>Yes, Continue</button>
              <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>No, Change weight</button>
            </div>
            {/* {
              (state.parcelCost !== 0 && (state.parcelCost !== null)) && */}
            <small>International pricing applies. See <Link to='/pricing' target='_blank' style={{ color: '#00bdbe', cursor: 'pointer', textDecoration: 'none' }}>Pricing Guide</Link></small>
            {/* } */}
          </div>}
        {(state.isAuthenticated && (state.locationCity && state.destinationCity)) &&
          <div>
            <h2>Please choose the relevant countries and cities to continue</h2>
            <br />
            <div className="button-group">
              <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>Okay, Thanks</button>
            </div>
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

// TODO: Implement scroll to top when user clicks 'Okay Thanks' to choose relevant countries and cities

const mapStateToProps = state => ({
  travelers: state.travelers,
  user: state.auth
})

export default connect(mapStateToProps, { fetchTravelers })(Parcel)
