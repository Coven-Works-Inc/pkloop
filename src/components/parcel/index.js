import React, { Component } from 'react'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { postParcel } from '../../actions/parcelActions'

import './parcel.css'

class Parcel extends Component {
  state = {
    location: '',
    destination: '',
    parcelSize: { value: '' },
    parcelWeight: '',
    additionalInfo: ''
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()

    const {
      location,
      destination,
      parcelSize,
      parcelWeight,
      additionalInfo
    } = this.state

    const parcelData = {
      location,
      destination,
      parcelSize,
      parcelWeight,
      additionalInfo
    }

    this.props.postParcel(parcelData, this.props.history)
  }
  render () {
    return (
      <HeaderFooter>
        <div className='maincontainer send-parcel'>
          <h1>Send Parcel</h1>
          <div className='py-2 form-group'>
            <form onSubmit={this.submitHandler}>
              <input
                type='text'
                id='location'
                value={this.state.location}
                onChange={this.onChangeHandler}
                placeholder='From: City, Country'
                name='location'
              />{' '}
              <br />
              <input
                type='text'
                id='destination'
                value={this.state.destination}
                onChange={this.onChangeHandler}
                placeholder='To: City, Country'
                name='destination'
              />{' '}
              <br />
              <select
                name='parcelSize'
                value={this.state.parcelSize}
                onChange={this.onChangeHandler}
              >
                <option value=''>Size you are willing to transport</option>
                <option value='extra large'>
                  Extra large (E.g Big box, electronics)
                </option>
                <option value='large'>large (E.g Laptops)</option>
                <option value='medium'>medium (E.g drink packs)</option>
                <option value='small'>small (E.g mobile phone)</option>
              </select>
              <br />
              {/* <select>
                <option value='small'>
                  0 - 5(lbs)
                </option>
                <option value='medium'>6 - 10lbs</option>
                <option value='large'>11 - 15lbs</option>
              </select> */}
              <input
                type='number'
                id='parcelWeight'
                name='parcelWeight'
                value={this.state.parcelWeight}
                onChange={this.onChangeHandler}
                placeholder='Enter Weight of parcel in pounds (E.g 4 for 4lbs)'
              />
              <textarea
                name='additionalInfo'
                id='additionalInfo'
                value={this.state.additionalInfo}
                onChange={this.onChangeHandler}
                placeholder='Additional information'
              />
              <button className='btnQ'>Find Travellers</button>
            </form>
          </div>
        </div>
      </HeaderFooter>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.errors,
  loading: state.loading
})

export default connect(mapStateToProps, { postParcel })(Parcel)
