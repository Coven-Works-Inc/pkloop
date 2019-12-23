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
              <div className='country_div'>
                <select
                  name='Country'
                  value={this.state.country}
                  onChange={this.onChangeHandler}
                >
                  <option value='united states'>United States</option>
                </select>
                <select
                  name='parcelSize'
                  value={this.state.parcelSize}
                  onChange={this.onChangeHandler}
                >
                  <option value=''>New York City (NYC) </option>
                </select>
              </div>{' '}
              <div className='country_div'>
                <select
                  name='Country'
                  value={this.state.country}
                  onChange={this.onChangeHandler}
                >
                  <option value='united states'>United States</option>
                </select>
                <select
                  name='parcelSize'
                  value={this.state.parcelSize}
                  onChange={this.onChangeHandler}
                >
                  <option value=''>New York City (NYC) </option>
                </select>
              </div>
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
              <select
                name='parcelWeight'
                value={this.state.parcelWeight}
                onChange={this.onChangeHandler}
              >
                <option value=''>
                  Select parcel weight in pounds (lbs). E.g enter 4 for 4 lbs.
                  Also note 1kg = 2.2lbs; multiply weight in kg x 2.2 to get lb
                  weight
                </option>
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
