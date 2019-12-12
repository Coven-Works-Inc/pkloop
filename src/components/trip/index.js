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
    transport: '',
    additionalInfo: ''
  }

  componentWillReceiveProps() {
    this.setState({
      errors: this.props.error
    })
    setTimeout(() => {
      this.setState({ errors: '' })
    }, 4000)
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = e => {
    e.preventDefault()

    const tripData = {
      location: this.state.location,
      destination: this.state.destination,
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

  render() {
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
                  placeholder=' To:   City, Country'
                />
              </div>
              <div className='trip_field'>
                <input
                  type='text'
                  name='arrivalDate'
                  id='arrivalDate'
                  value={this.state.arrivalDate}
                  onChange={this.onChangeHandler}
                  placeholder='Arrival: dd/mm/yyyy'
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
                <select value={this.state.value} className={this.state.parcelWeight === '' ? 'gray' : ''}>
                  <option value=''>Weight you are willing to transport</option>
                  <option value='large'> 0 - 5 (lbs) </option>
                  <option value='medium'>6 - 10 (lbs) </option>
                  <option value='small'>10 - 15(lbs)</option>
                </select>
              </div>
              <div className='trip_field'>
                <select value={this.state.value} className={this.state.transport === '' ? 'gray' : ''}>
                  <option value=''>Means of transportation</option>
                  <option value='large'> Plane</option>
                  <option value='medium'>Train</option>
                  <option value='small'>Ship</option>
                  <option value='small'>Road</option>
                  <option value='small'>Bicycle</option>
                </select>
              </div>
              {/* <div className='trip_field'>
                <input
                  type='text'
                  name='transport'
                  id='transport'
                  value={this.state.transport}
                  onChange={this.onChangeHandler}
                  placeholder='Means of transportation Flight'
                />
              </div> */}
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

export default connect(
  mapStateToProps,
  { postTrip }
)(index)
