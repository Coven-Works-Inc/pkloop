import React, { Component } from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'
import { connect } from 'react-redux'
import { postTrip } from '../../actions/tripActions'

import './trips.css'

class index extends Component {
  state = {
    location: '',
    destination: '',
    arrivalDate: '',
    stopOver1: '',
    stopOver2: '',
    stopOver3: '',
    stopOver4: '',
    parcelSize: '',
    parcelWeight: '',
    transport: { value: '' },
    additionalInfo: ''
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

  onSubmitHandler = e => {
    e.preventDefault()

    const tripData = {
      locationCity: this.state.location,
      locationCountry: this.state.locationCountry,
      destinationCity: this.state.destinationCity,
      destinationCountry: this.state.destinationCountry,
      arrivalDate: this.state.arrivalDate,
      stopOver1: this.state.stopOver1,
      stopOver2: this.state.stopOver2,
      stopOver3: this.state.stopOver3,
      stopOver4: this.state.stopOver4,
      parcelSize: this.state.parcelSize,
      parcelWeight: this.state.parcelWeight,
      transport: this.state.transport,
      additionalInfo: this.state.additionalInfo
    }

    // TODO: Check if location, destination, stopovers have same value

    if (tripData.parcelWeight.value === '') {
      // TODO: display an error at this point and prevent submission of form
    }

    this.props.postTrip(tripData, this.props.history)

    this.setState({
      location: '',
      destination: '',
      arrivalDate: '',
      stopOver1: '',
      stopOver2: '',
      stopOver3: '',
      stopOver4: '',
      size: '',
      transport: '',
      additionalInfo: ''
    })
  }

  render () {
    return (
      <HeaderFooter>
        <Banner title='List Your Trip' />
        <section id='list_form'>
          <div className='trip_container'>
            <form onSubmit={this.onSubmitHandler}>
              <div className='trip_field'>
                <input
                  type='text'
                  name='location'
                  id='location'
                  value={this.state.location}
                  onChange={this.onChangeHandler}
                  placeholder='From: City, Country'
                />
              </div>
              <div className='trip_field'>
                <input
                  type='text'
                  name='destination'
                  id='destination'
                  value={this.state.destination}
                  onChange={this.onChangeHandler}
                  placeholder=' To: City, Country'
                />
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
                  Add Stopovers (stopovers will increase your chances of getting
                  connections){' '}
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
                  placeholder='Stopover 1  City, Country'
                />

                <input
                  type='text'
                  name='stopOver2'
                  id='stopOver2'
                  value={this.state.stopOver2}
                  onChange={this.onChangeHandler}
                  placeholder='Stopover 2  City, Country'
                />
              </div>
              <div className='dup'>
                <input
                  type='text'
                  name='stopOver3'
                  id='stopOver3'
                  value={this.state.stopOver3}
                  onChange={this.onChangeHandler}
                  placeholder='Stopover 3   City, Country'
                />

                <input
                  type='text'
                  name='stopOver4'
                  id='stopOver4'
                  value={this.state.stopOver4}
                  onChange={this.onChangeHandler}
                  placeholder='Stopover 4   City, Country'
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
                <button className='trip-button'>POST YOUR TRIP</button>
              </div>
            </form>
          </div>
        </section>
      </HeaderFooter>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.errors,
  loading: state.loading
})

export default connect(mapStateToProps, { postTrip })(index)
