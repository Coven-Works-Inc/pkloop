import React, { Component } from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'
import { connect } from 'react-redux'
import { postTrip } from '../../actions/tripActions'
import countries from '../../countries.json'
import cities from '../../world-cities_json.json';

import './trips.css'
import Modal from '../common/modal'

class index extends Component {
  state = {
    locationCity: '',
    locationCountry: '',
    destinationCity: '',
    destinationCountry: '',
    arrivalDate: '',
    stopOver1: '',
    stopOver2: '',
    stopOver3: '',
    stopOver4: '',
    parcelSize: '',
    parcelWeight: '',
    transport: { value: '' },
    additionalInfo: '',
    modalOpen:false,
    fromcities: [],
    tocities: [],
  }

  // componentWillReceiveProps () {
  //   this.setState({
  //     errors: this.props.error
  //   })
  //   setTimeout(() => {
  //     this.setState({ errors: '' })
  //   }, 4000)
  // }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onFromCountryChangeHandler = e => {
    const selectedCountry = countries.filter(country => country.name === e.target.value )
    const city = cities.filter(city => city.country === selectedCountry[0].name)
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      fromcities: city
    })
  }
  onToCountryChangeHandler = e => {
    const selectedCountry = countries.filter(country => country.name === e.target.value )
    const city = cities.filter(city => city.country === selectedCountry[0].name)
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      tocities: city
    })
  }
  toggleModal = () => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen
    })
  }

  onSubmitHandler = e => {
    e.preventDefault()
    this.toggleModal()
    setTimeout(this.toggleModal, 1000)
    const tripData = {
      locationCity: this.state.locationCity,
      locationCountry: this.state.locationCountry,
      destinationCity: this.state.destinationCity,
      destinationCountry: this.state.destinationCountry,
      arrivalDate: this.state.arrivalDate,
      stopOver1: this.state.stopOver1,
      stopOver2: this.state.stopOver2,
      stopOver3: this.state.stopOver3,
      username: this.props.user.username,
      stopOver4: this.state.stopOver4,
      parcelSize: this.state.parcelSize,
      parcelWeight: this.state.parcelWeight,
      transport: this.state.transport,
      additionalInfo: this.state.additionalInfo
    }

    // TODO: Check if location, destination, stopovers have same value

    // if (tripData.parcelWeight.value === '') {
    //   // TODO: display an error at this point and prevent submission of form
    // }

    this.props.postTrip(tripData, this.props.history)
    this.setState({
      locationCity: '',
      locationCountry: '',
      destinationCity: '',
      destinationCountry: '',
      arrivalDate: '',
      stopOver1: '',
      stopOver2: '',
      stopOver3: '',
      stopOver4: '',
      parcelSize: '',
      parcelWeight: '',
      transport: '',
      additionalInfo: ''
    })
  }

  render () {
    const { message } = this.props
    return (
      <HeaderFooter redirect={this.props.location}>
        <Banner title='List Your Trip' />
        <section id='list_form'>
          <div className='trip_container'>
            {message !== undefined ? (
              <h3>{message}</h3>
            ) : (
              <form onSubmit={this.onSubmitHandler} autoComplete='off'>
                <div className='country_div' style={{ marginBottom: '1rem' }}>
                  <div>
                    <label>From (Country)</label>
                    <select
                      name='locationCountry'
                      value={this.state.locationCountry}
                      onChange={this.onFromCountryChangeHandler}
                    >
                      {countries.map((country, index) => (
                      <option value={country.name} key={index}>{country.name}</option>
                   ))}
                    </select>
                  </div>
                  <div>
                    <label>From (City)</label>
                    <select
                      name='locationCity'
                      value={this.state.locationCity}
                      onChange={this.onChangeHandler}
                    >
                      <option value=""></option>
                      {this.state.fromcities.sort().map((city, index) => (
                      <option value={city.name} key={index}>{city.name}, {city.subcountry}</option>
                     ))}
                  
                    </select>
                  </div>
                </div>
                <div className='country_div' style={{ marginBottom: '1rem' }}>
                  <div>
                    <label> To (Country)</label>
                    <select
                      name='destinationCountry'
                      value={this.state.destinationCountry}
                      onChange={this.onToCountryChangeHandler}
                    >
                      {countries.map((country, index) => (
                      <option value={country.name} key={index}>{country.name}</option>
                   ))}
                    </select>
                  </div>
                  <div>
                    <label>To (City)</label>
                    <select
                      name='destinationCity'
                      value={this.state.destinationCity}
                      onChange={this.onChangeHandler}
                    >
                      <option value=""></option>
                      {this.state.tocities.sort().map((city, index) => (
                      <option value={city.name} key={index}>{city.name}, {city.subcountry}</option>
                     ))}
                  
                    </select>
                  </div>
                </div>
                <div className='trip_field'>
                  <input
                    type='date'
                    name='arrivalDate'
                    id='arrivalDate'
                    value={this.state.arrivalDate}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className='stopover'>
                  <p>
                    Add Stopovers (stopovers will increase your chances of
                    getting connections){' '}
                  </p>
                  <hr
                    style={{
                      transform: 'rotate(90deg)',
                      borderColor: '#00bdbe',
                      background: 'none'
                    }}
                  />
                </div>
                <div className='dup'>
                  <input
                    type='text'
                    name='stopOver1'
                    id='stopOver1'
                    value={this.state.stopOver1}
                    onChange={this.onChangeHandler}
                    placeholder='Stopover 1 City, Country'
                    autoComplete='off'
                  />

                  <input
                    type='text'
                    name='stopOver2'
                    id='stopOver2'
                    value={this.state.stopOver2}
                    onChange={this.onChangeHandler}
                    placeholder='Stopover 2 City, Country'
                  />
                </div>
                <div className='dup'>
                  <input
                    type='text'
                    name='stopOver3'
                    id='stopOver3'
                    value={this.state.stopOver3}
                    onChange={this.onChangeHandler}
                    placeholder='Stopover 3 City, Country'
                  />

                  <input
                    type='text'
                    name='stopOver4'
                    id='stopOver4'
                    value={this.state.stopOver4}
                    onChange={this.onChangeHandler}
                    placeholder='Stopover 4 City, Country'
                  />
                </div>
                <div className='trip_field'>
                  <input
                    type='text'
                    name='parcelSize'
                    id='parcelSize'
                    value={this.state.parcelSize}
                    onChange={this.onChangeHandler}
                    placeholder='Size you are willing to transport, Extra large(E.g Big box, electronics)'
                  />
                </div>
                <div className='trip_field'>
                  <input
                    type='number'
                    name='parcelWeight'
                    id='parcelWeight'
                    value={this.state.parcelWeight}
                    onChange={this.onChangeHandler}
                    placeholder='Enter the maximum weight you can transport in (lbs). E.g enter 4 for 4 lbs.
                  Also note 1kg = 2.2lbs; multiply weight in kg x 2.2 to get lb'
                  />
                </div>

                <div className='trip_field'>
                  <select
                    name='transport'
                    value={this.state.transport}
                    className={this.state.transport === '' ? 'gray' : ''}
                    onChange={this.onChangeHandler}
                    style={{ color: '#9b9b9b' }}
                  >
                    <option value=''>Means of transportation</option>
                    <option value='plane'>Plane</option>
                    <option value='train'>Train</option>
                    <option value='ship'>Ship</option>
                    <option value='road'>Road</option>
                    <option value='bicycle'>Bicycle</option>
                  </select>
                </div>

                <div className='trip_field'>
                  <textarea
                    name='additionalInfo'
                    id='additionalInfo'
                    value={this.state.additionalInfo}
                    onChange={this.onChangeHandler}
                    placeholder='Additional information'
                  />
                </div>

                <div className='button_div'>
                  <button className='trip-button' type="submit">POST YOUR TRIP</button>
                </div>
              </form>
            )}
          </div>
        </section>
        <Modal show={this.state.modalOpen} onClose={this.toggleModal}>
          <h5 className="trip-modal">Trip successfully posted, We would let you know when you have a new connection</h5>
        </Modal>
      </HeaderFooter>
    )
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
  user: state.auth.user
})

export default connect(mapStateToProps, { postTrip })(index)
