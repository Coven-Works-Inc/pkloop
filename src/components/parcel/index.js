import React, { useState, useEffect } from 'react'
// import { postParcel } from '../../actions/parcelActions'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { fetchTravelers, getTravelers, connectTraveler } from '../../actions/travelerActions'
import { postTransaction } from '../../actions/transActions'
import { addInsurance } from '../../actions/costActions'

import countries from '../../countries.json'
import cities from '../../world-cities_json.json';

import Travelers from './travelers'
import Modal from '../common/modal'

import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { reduceBalance, reduceEscrow } from '../../actions/balanceActions'
import './parcel.css'
import travelData from '../../travelers.json'
import countriesData from '../../countries.json'

const Parcel = props => {

  const [modal, setModal] = useState(false)
  const [walletBalance, setBalance] = useState(0)
  const [escrow, setEscrow] = useState(0)
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
    fundAmount: 29.99 - Number(walletBalance),
    sameUser: false,
    parcelWorth: 0,
    parcelItem: '',
    insuranceCost: '',
    checked: false,
    modal1: false,
    modal2: false,
    totalCost: 0,
    totalAndTip: 0,
    message: '',
    tipAmount: 0,
    tipChecked: false,
    disabled: false,
    escrowModal: false
  })

  useEffect(() => {
    props.fetchTravelers()
  }, [])
  useEffect(() => {
    setState({
      ...state,
      disabled: Number(walletBalance) > 0 && state.totalAndTip > Number(walletBalance) + Number(escrow)
    })
  }, [state.totalAndTip])
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (modal) {
  //       setModal(false)
  //       setState({
  //         ...state,
  //         modal1: false,
  //         modalOpen: false
  //       })
  //     }
  //   }, 1000)
  // }, [modal])
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


  useEffect(() => {
    getUserData()
  }, [])
  useEffect(() => {
    if(!state.checked){
      setState({
        ...state,
         totalCost: state.parcelCost + state.tipAmount,
         totalAndTip: state.parcelCost + state.tipAmount,
         parcelWorth:0,
         insuranceCost: 0
      })
    }
  }, [state.checked])
  useEffect(() => {
    if(!state.tipChecked){
      setState({
        ...state,
        totalCost: Number(state.parcelCost) + Number(state.insuranceCost),
         totalAndTip: Number(state.parcelCost) + Number(state.insuranceCost),
         tipAmount:0
      })
    }
  }, [state.tipChecked])
  useEffect(() => {
    if (props.status === 200) {
      setModal(true)
          setState({
      ...state,
      parcelWorth: 0,
      parcelItem: '',
      insuranceCost: '',
      checked: false,
      modal1: false,
      modal2: false,
      totalCost: 0,
      modalOpen: false,
      totalAndTip: 0,
      message: '',
      tipAmount: 0,
      tipChecked: false,
    })
    }
  }, [props.status])

  const getUserData = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/users/fetchUser`)
      .then(response => {
        setBalance(response.data.data.balance)
        setEscrow(response.data.data.escrowAmount)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fundWallet = () => {
    const data = { amount: Number(state.fundAmount) }

    axios.put(`${process.env.REACT_APP_BASE_URL}/users/updateMyBalance`, data)
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

  const messageChangeHandler = (e) => {
    setState({
      ...state,
      message: e.target.value
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

    axios.post(`${process.env.REACT_APP_BASE_URL}/payments`, data)
      .then(response => {
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
      if (props.user.user._id === traveler.user._id) {
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
    setModal(false)
  }
  const handleParcelCost = (traveler) => {
    const localMultiplier = 1.5
    const intlMultiplier = 5.99
    const parcelWeight = parseInt(state.parcelWeight)
    const escrowModal = Boolean(props.user.user.escrowAmount)
    if (traveler.locationCountry && traveler.destinationCountry) {
      if ((traveler.locationCountry === 'United States' || traveler.locationCountry === 'Canada') && (traveler.destinationCountry === 'United States' || traveler.destinationCountry === 'Canada')) {
        if (parcelWeight <= 5) {
          props.getTravelers({
            senderCost: 14.99,
            senderWeight: state.parcelWeight,
            modal1: true,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            isAuthenticated: true,
            isLocal: true,
            modal1: true,
            parcelCost: 14.99,
            totalCost: 14.99,
            travelerData: traveler
          })
        } else {
          props.getTravelers({
            senderCost: (14.99 + (parcelWeight * localMultiplier)).toFixed(2),
            senderWeight: state.parcelWeight,
            modal1: true,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            escrowModal,
            isAuthenticated: true,
            isLocal: true,
            modal1: true,
            parcelCost: (14.99 + (parcelWeight * localMultiplier)).toFixed(2),
            totalCost: (14.99 + (parcelWeight * localMultiplier)).toFixed(2),
            travelerData: traveler,
          })
        }
      } else {
        if (parcelWeight <= 5) {
          props.getTravelers({
            senderCost: 24.99,
            modal1: true,
            senderWeight: state.parcelWeight,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            escrowModal,
            modal1: true,
            isAuthenticated: true,
            isLocal: false,
            parcelCost: 24.99,
            totalCost: 24.99,
            travelerData: traveler,
          })
        } else {
          props.getTravelers({
            senderCost: (parcelWeight * intlMultiplier).toFixed(2),
            senderWeight: state.parcelWeight,
            modal1: true,
            ...traveler
          })
          setState({
            ...state,
            modalOpen: true,
            escrowModal,
            isAuthenticated: true,
            modal1: true,
            isLocal: false,
            parcelCost: (parcelWeight * intlMultiplier).toFixed(2),
            totalCost: (parcelWeight * intlMultiplier).toFixed(2),
            travelerData: traveler,
          })
        }
      }
    } else {
      if (parcelWeight <= 5) {
        props.getTravelers({
          senderCost: 24.99,
          senderWeight: state.parcelWeight,
          modal1: true,
          ...traveler
        })
        setState({
          ...state,
          modalOpen: true,
          escrowModal,
          isAuthenticated: true,
          modal1: true,
          isLocal: false,
          parcelCost: 24.99,
          totalCost: 24.99,
          travelerData: traveler
        })
      } else {
        props.getTravelers({
          senderCost: (parcelWeight * intlMultiplier).toFixed(2),
          senderWeight: state.parcelWeight,
          modal1: true,
          ...traveler
        })
        setState({
          ...state,
          modalOpen: true,
          escrowModal,
          isAuthenticated: true,
          isLocal: false,
          modal1: true,
          parcelCost: (parcelWeight * intlMultiplier).toFixed(2),
          totalCost: (parcelWeight * intlMultiplier).toFixed(2),
          travelerData: traveler
        })
      }
    }
  }
  const connectToTraveler = () => {

    // props.history.push({
    //   pathname: '/dashboard/travelerchat',
    //   parcelCost: state.parcelCost,
    //   travelerData: state.travelerData
    // })

    // const transactionData = {
    //   status: 'Pending',
    //   with: state.travelerData.username,
    //   role: 'Sender',
    //   travelerId: state.travelerData.user._id,
    //   senderName: props.user.user.username,
    //   trip: state.travelerData,
    //   tripId: state.travelerData._id
    // }
    const totalCost = state.totalAndTip === 0 ? Number(state.totalCost) + (0.05 * Number(state.totalCost)) : Number(state.totalAndTip) + (0.05 * Number(state.totalAndTip))
    const earning = state.totalAndTip === 0 ? state.parcelCost : Number(state.parcelCost) + Number(state.tipAmount)
    const insuranceData = {
      item: state.parcelItem,
      amount: Number(state.insuranceCost),
      total: state.parcelWorth
    }
    const userDetails = {
      tripId: state.travelerData._id,
      parcelWeight: state.parcelWeight,
      travelerId: state.travelerData.user._id,
      amount: earning,
      totalAmount: totalCost,
      username: state.travelerData.username,
      message: state.message,
      tip: Number(state.tipAmount)
    }
    props.connectTraveler(userDetails)
    if(Number(escrow) > totalCost) {
      props.reduceEscrow({ amount: totalCost })
    } else {
      if(Number(escrow) > 0){
        props.reduceEscrow({ amount: Number(escrow) })
        props.reduceBalance({ amount: totalCost - Number(escrow)})
      } else {
        props.reduceBalance({ amount: totalCost})
      }
    }
    if(state.checked){
      props.addInsurance(insuranceData)
    }
    // props.postTransaction(transactionData))
  }

  const toggleModal = () => {
    setState({
      ...state,
      modalOpen: !state.modalOpen,
    })
  }
  const itemChangeHandler = e => (
    setState({
      ...state,
      parcelItem: e.target.value
    })
  )

  const insuranceChangeHandler = e => {
    setState({
      ...state,
      parcelWorth: Number(e.target.value),
      insuranceCost: Number(0.02 * Number(e.target.value)).toFixed(2),
      totalCost: (Number(state.parcelCost) + (0.02 * Number(e.target.value))).toFixed(2),
      totalAndTip: Number(state.totalAndTip) === 0 ? Number(Number(state.parcelCost) + Number(state.totalAndTip) - Number(state.insuranceCost) +  (0.02 * Number(e.target.value))).toFixed(2) : Number(Number(state.totalAndTip) - Number(state.insuranceCost) +  (0.02 * Number(e.target.value))).toFixed(2),
    })
  }

  const handleCheckbox = () => {
    console.log(state)
    setState({
      ...state,
      checked: !state.checked
    })
  }
  const handleTipCheckbox = () => {
    setState({
      ...state,
      tipChecked: !state.tipChecked
    })
  }
  const onTipChange = (e) => {
    if(Number(e.target.value) >= 0){
      setState({
        ...state,
        tipAmount: Number(e.target.value),
        totalAndTip: Number(Number(state.totalCost) + Number(e.target.value)).toFixed(2),
      })
    }
  }
  const closeEscrowModal = () => {
    setState({
      ...state,
      escrowModal: false
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
                  {state.fromcities && state.fromcities.sort().map((city, index) => (
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
                  {state.tocities && state.tocities.sort().map((city, index) => (
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

            <button className='btnQ' type="submit">Find Travelers</button>
          </form>
        </div>
      </div>


      <Travelers travelers={state.filteredLocation ? state.filteredLocation : travelers} toggle={toggleModal} connect={handleConnect} />

      <Modal show={state.modalOpen}
        onClose={toggleModal}>
        {state.isAuthenticated &&
          <div>
            {
              Number(walletBalance) + Number(escrow) >= Number(state.parcelCost) &&
              <div>
                {
                  state.modal1 && (
                    <div>
                        {escrow > 0 && <h5>You have ${Number(escrow).toFixed(2)} in your escrow wallet</h5>}
                        <h5 style={{ display: state.checked ?" none" : "block"}}>Are you sure you want to send {state.parcelWeight} pounds of weight? Costs ${state.parcelCost}</h5>
                        <h5>Total cost: ${state.tipAmount === 0 ? Number(state.totalCost): state.totalAndTip}</h5>
                        <textarea style={{ display: state.checked ?" none" : "block"}} className="support_input" placeholder="Leave a message for traveler" onChange={messageChangeHandler}></textarea>
                        <label className="container">Add insurance
                          <input type="checkbox" checked={state.checked} onChange={handleCheckbox} />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Add  tip
                          <input type="checkbox" checked={state.tipChecked} onChange={handleTipCheckbox} />
                          <span className="checkmark"></span>
                        </label>
                        {state.checked && (
                              <div>
                              <label>What is the worth of your parcel? Range between $0 - $1500</label>
                              <input type="range" min="0" max="1500" value={state.parcelWorth} onChange={insuranceChangeHandler} className="slider" />
                              <h4>parcel Worth: {state.parcelWorth}</h4>
                              <label>Which items are you insuring?</label>
                              <input type="text" value={state.parcelItem} onChange={itemChangeHandler} placeholder="e.g Coffee table" className="support_input" />
                              <h5>You will be charged 2% (${state.insuranceCost})of the total cost for insurance</h5>
                              By clicking on Proceed, you agree to InsureShip <a href="https://www.insureship.com/privacy" target="_blank"> Privacy policy</a> and <a href="https://www.insureship.com/terms" target="_blank">terms</a>
                            </div>
                        )}
                        {state.tipChecked && (
                             <div><h5>Enter an amount to tip traveler</h5><input type="number" className="support_input" name="fundAmount" placeholder="Enter Amount" value={state.tipAmount} onChange={onTipChange} /></div>
                        )}
                        <h6>5% platform charges included</h6>
                        <div className="button-group">
                        <button className="btnQ medium"
                        disabled={state.disabled}
                        onClick={connectToTraveler}>{props.loading ? (<span
                        style={{ display: 'inline-block' }}
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      ></span>) : state.tipAmount === 0? `Pay $${Number(state.totalCost).toFixed(2)} + $${(0.05 * Number(state.totalCost)).toFixed(2)}` : `Pay ${Number(state.totalAndTip).toFixed(2)} + $${(0.05 * Number(state.totalAndTip)).toFixed(2)}`}</button>
                          <button className="btnQ inverse-btnQ medium" onClick={toggleModal}>No, Change weight</button>
                        </div>
                        {/* {state.totalCost >= Number(walletBalance) && Number(state.tipAmount) !== 0 && <h5>You need an addtional ${Number(state.totalCost - Number(walletBalance)).toFixed(2)} to continue with this transaction</h5>} */}
                        {state.totalAndTip + (0.05 * state.totalAndTip) >= Number(walletBalance) + Number(escrow) && <h6 style={{ color: 'red'}}>You need an addtional ${Number((state.totalAndTip + (0.05 * state.totalAndTip)) - Number(walletBalance) - Number(escrow)).toFixed(2)} to continue with this transaction</h6>}
                    </div>
                  )

                }

                {/* {
                  !state.isLocal &&
                  <small>International pricing applies. See <Link to='/pricing' target='_blank' style={{ color: '#00bdbe', cursor: 'pointer', textDecoration: 'none' }}>Pricing Guide</Link></small>
                } */}
              </div>
            }
            {
              Number(walletBalance) + Number(escrow)< Number(state.parcelCost) &&
              <div>
                <h2>Your balance is insufficient to connect with a traveler. Fund your wallet to continue</h2>
                <br />
                <input type="number" className="popupInput" name="fundAmount" placeholder="Enter Amount" value={state.fundAmount} onChange={onChangeHandler} />
                <br />
                <div className="button-group">
                  {Number(state.fundAmount) + Number(walletBalance) + Number(escrow) >= 29.99 ?
                    <StripeCheckout
                      image={require('../../assets/payment-logo.png')}
                      stripeKey="pk_live_LYJ9SGqqQIPBDokhAzDCBiIS008lZBDc9Z"
                      description="Connect with a traveler"
                      name="Make payment to continue"
                      locale="auto"
                      amount={Number(state.fundAmount) * 100}
                      token={onToken}
                      panelLabel="Pay"
                    /> :
                    <div>{`Minimum of $${29.99 - Number(walletBalance) - Number(escrow)} is required to fund wallet`}</div>
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
      {modal && (
        <Modal show={modal} onClose={closeModal}>
          <div>You've successfully paid for this transaction</div>
        </Modal>
      )
      }     
      {/* {state.sameUser && <Modal show={state.sameUser} onClose={closeModal}><div>Can't connect with your self</div></Modal>} */}
    </HeaderFooter>
  )
}

const mapStateToProps = state => ({
  travelers: state.travelers,
  user: state.auth,
  loading: state.auth.loading,
  status: state.balance.status,
})

export default connect(mapStateToProps, { fetchTravelers, 
                                          getTravelers, 
                                          connectTraveler, 
                                          addInsurance, 
                                          postTransaction, 
                                          reduceBalance, 
                                          reduceEscrow })(Parcel)