import React, { useState, useEffect } from 'react'
// import { postParcel } from '../../actions/parcelActions'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { fetchTravelers, getTravelers, connectTraveler } from '../../actions/travelerActions'
import { postTransaction } from '../../actions/transActions'
import { Link } from 'react-router-dom'

import countries from '../../countries.json'
import cities from '../../world-cities_json.json';

import Travelers from './travelers'
import Modal from '../common/modal'

import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { BASE_URL } from '../../config/constants'

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
    runParcelCost: null,
    fundAmount: 29.99,
    sameUser: false
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
  }
  const onChangeHandler = e => {
    if (e.target.name === 'fromCity') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => traveler.locationCity === e.target.value && traveler.locationCountry === state.fromCountry)
      })
    }
    if (e.target.name === 'toCity') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => traveler.destinationCity === e.target.value && traveler.locationCountry === state.fromCountry && traveler.locationCity === state.fromCity)
      })
    };
    if (e.target.name === 'parcelSize') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => traveler.parcelSize === e.target.value)
      })
    };
    if (e.target.name === 'parcelWeight') {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        filteredLocation: travelers.filter(traveler => Number(traveler.parcelWeight) >= Number(e.target.value)),
      })
    }
    if (e.target.name === 'fundAmount') {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  }
  const submitHandler = e => {
    setState({
      ...state,
      modalOpen: true
    })
    e.preventDefault()
  }

  const [walletBalance, setBalance] = useState(0)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    axios.get(`${BASE_URL}/users/fetchUser`)
      .then(response => {
        console.log(response.data)
        setBalance(response.data.data.balance)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fundWallet = () => {
    const data = { amount: Number(state.fundAmount) }

    axios.put(`${BASE_URL}/users/updateMyBalance`, data)
      .then(response => {
        toggleModal();
        getUserData();
      })
      .catch(error => {
        console.log(error)
      });
  }

  const addTravelerToState = traveler => {
    setState({
      ...state,
      travelerData: traveler
    })
  }
  const onToken = (token) => {
    toggleModal();
    const amountToPay = Number(state.fundAmount) * 100;

    const data = {
      description: `Payment of $${state.fundAmount} made by ${token.email} on ${token.created}`,
      source: token.id,
      currency: 'USD',
      amount: amountToPay
    }

    axios.post(`${BASE_URL}/payments`, data)
      .then(response => {
        console.log(response)
        fundWallet();
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleConnect = (traveler) => {
    if (!props.user.isAuthenticated) {
      setState({
        ...state,
        modalOpen: true,
        isAuthenticated: false
      })
    } else {
      if(props.user.user._id === traveler.user._id){
        setState({
          ...state,
          sameUser: true
        })
      } else {
        addTravelerToState(traveler)
        handleParcelCost(traveler)
      }
    }
  }
  const closeModal = () => {
    setState({
      ...state,
      sameUser: false
    })
  }
  const handleParcelCost = (traveler) => {
    console.log(traveler)
    const localMultiplier = 1.5
    const intlMultiplier = 5.99
    const parcelWeight = parseInt(state.parcelWeight)
    if (traveler.locationCountry && traveler.destinationCountry) {
      if ((traveler.locationCountry === 'United States' || traveler.locationCountry === 'Canada') && (traveler.destinationCountry === 'United States' || traveler.destinationCountry === 'Canada')) {
        if (parcelWeight <= 5) {
          props.getTravelers({
            senderCost: 14.99,
            senderWeight: state.parcelWeight,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            isLocal: true,
            parcelCost: 14.99,
            travelerData: traveler
          })
        } else {
          props.getTravelers({
            senderCost: (14.99 + (parcelWeight * localMultiplier)).toFixed(2),
            senderWeight: state.parcelWeight,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            isLocal: true,
            parcelCost: (14.99 + (parcelWeight * localMultiplier)).toFixed(2),
            travelerData: traveler,
          })
        }
      } else {
        if (parcelWeight <= 5) {
          props.getTravelers({
            senderCost: 24.99,
            senderWeight: state.parcelWeight,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            isLocal: false,
            parcelCost: 24.99,
            travelerData: traveler,
          })
        } else {
          props.getTravelers({
            senderCost: (parcelWeight * intlMultiplier).toFixed(2),
            senderWeight: state.parcelWeight,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            isLocal: false,
            parcelCost: (parcelWeight * intlMultiplier).toFixed(2),
            travelerData: traveler,
          })
        }
      }
    } else {
      if (parcelWeight <= 5) {
        props.getTravelers({
          senderCost: 24.99,
          senderWeight: state.parcelWeight,
          ...traveler
        })
        setState({
          ...state,
          modalOpen: true,
          isAuthenticated: true,
          isLocal: false,
          parcelCost: 24.99,
          travelerData: traveler
        })
      } else {
        props.getTravelers({
          senderCost: (parcelWeight * intlMultiplier).toFixed(2),
          senderWeight: state.parcelWeight,
          ...traveler
        })
        setState({
          ...state,
          modalOpen: true,
          isAuthenticated: true,
          isLocal: false,
          parcelCost: (parcelWeight * intlMultiplier).toFixed(2),
          travelerData: traveler
        })
      }
    }
  }

  console.log(props)

  // fetchCountries = () => {
  //   let countriesList = ''
  //   this.state.countries.map((country, index) => {
  //     countriesList += <option value={country[index]}>{country[index]}</option>
  //   })
  //   return countriesList
  // }
  const connectToTraveler = () => {
    props.history.push({
      pathname: '/dashboard/chat',
      parcelCost: state.parcelCost,
      travelerData: state.travelerData
    })
    const userDetails = {
      senderUsername: props.user.user.username,
      travelerUsername: state.travelerData.username
    }
    const transactionData = {
      status: 'Pending',
      with: state.travelerData.username,
      role: 'Sender',
      travelerId: state.travelerData.user._id,
      senderName: props.user.user.username,
      trip: state.travelerData,
      tripId: state.travelerData._id
    }
    props.connectTraveler(userDetails)
    props.postTransaction(transactionData)
  }
  const toggleModal = () => {
    setState({
      ...state,
      modalOpen: !state.modalOpen,
    })
  }

  const {
    travelers: { travelers }
  } = props

  return (
    <HeaderFooter redirect={props.location}>
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
        {state.isAuthenticated &&
          <div>
            {
              Number(walletBalance) >= Number(state.parcelCost) &&
              <div>
                <h2>Are you sure you want to send {state.parcelWeight} pounds of weight? Costs ${state.parcelCost}</h2>
                <br />
                <div className="button-group">
                  <button className="btnQ medium" onClick={connectToTraveler}>Yes, Continue</button>
                  <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>No, Change weight</button>
                </div>
                {
                  !state.isLocal &&
                  <small>International pricing applies. See <Link to='/pricing' target='_blank' style={{ color: '#00bdbe', cursor: 'pointer', textDecoration: 'none' }}>Pricing Guide</Link></small>
                }
              </div>
            }
            {
              Number(walletBalance) < Number(state.parcelCost) &&
              <div>
                <h2>Your balance is insufficient to connect with a traveler. Fund your wallet to continue</h2>
                <br />
                <input type="number" className="popupInput" name="fundAmount" placeholder="Enter Amount" value={state.fundAmount} onChange={onChangeHandler} />
                <br />
                <div className="button-group">
                  {state.fundAmount >= 29.99 ?
                    <StripeCheckout
                      image={require('../../assets/payment-logo.png')}
                      stripeKey="pk_test_Cx38uNUbnspMKJ4AX9y6NNAs0087uf7VGa"
                      description="Connect with a traveler"
                      name="Make payment to continue"
                      locale="auto"
                      amount={Number(state.fundAmount) * 100}
                      token={onToken}
                      panelLabel="Pay"
                    /> :
                    <div>Minimum of $29.99 is required to fund wallet</div>
                  }
                </div>
              </div>
            }
          </div>
        }
        {!state.isAuthenticated &&
          <div>
            <h2>Please login to connect with a traveller</h2>
            <br />
            <div className="button-group">
              <button className='btnQ medium' onClick={() => props.history.push({
                pathname: '/login',
                redirect: '/parcel'
              })}>Yes, Go To Login</button>
              <button className='btnQ inverse-btnQ medium' onClick={toggleModal}>No, Stay on This Page</button>
            </div>
          </div>}
      </Modal>
      {state.sameUser && <Modal show={state.sameUser} onClose={closeModal}><div>Can't connect with your self</div></Modal>}
    </HeaderFooter>
  )
}

const mapStateToProps = state => ({
  travelers: state.travelers,
  user: state.auth,
})

export default connect(mapStateToProps, { fetchTravelers, getTravelers, connectTraveler, postTransaction })(Parcel)