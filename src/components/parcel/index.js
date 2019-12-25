import React, { Component } from 'react'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { postParcel } from '../../actions/parcelActions'
import Travelers from './travelers'

import './parcel.css'
import travelData from '../../travelers.json'
import countriesData from '../../countries.json'

class Parcel extends Component {
  state = {
    fromCountry: '',
    fromCity: '',
    toCountry: '',
    toCity: '',
    parcelSize: '',
    parcelWeight: '',
    additionalInfo: '',
    travelers: travelData,
    filteredLocation: [],
    filteredDestination: [],
    countries: countriesData,
    fromcities: [],
    tocities: []
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()

    const {
      fromCountry,
      fromCity,
      toCountry,
      toCity,
      parcelSize,
      parcelWeight,
      additionalInfo
    } = this.state

    const parcelData = {
      fromCountry,
      fromCity,
      toCountry,
      toCity,
      parcelSize,
      parcelWeight,
      additionalInfo
    }

    console.log(parcelData);

    // this.props.postParcel(parcelData, this.props.history)
  }

  // fetchCountries = () => {
  //   let countriesList = ''
  //   this.state.countries.map((country, index) => {
  //     countriesList += <option value={country[index]}>{country[index]}</option>
  //   })
  //   return countriesList
  // }

  fetchCities = (type, country) => {
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
          }
        ]
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fromCountry !== this.state.fromCountry) {
      console.log('you updated the base country');
      this.fetchCities('from', this.state.fromCountry);
      // call a function/endpoint/action that gets the list of cities
    }

    if (prevState.toCountry !== this.state.toCountry) {
      console.log('you updated the destination country');
      // call a function/endpoint/action that gets the list of cities
    }
  }

  render() {
    const { travelers, countries } = this.state
    return (
      <HeaderFooter>
        <div className='maincontainer send-parcel'>
          <h1>Find Travellers</h1>
          <div className='py-2 form-group'>
            <form onSubmit={this.submitHandler}>
              <div className='country_div'>
                <div>
                  <label>From (Country)</label>
                  <select
                    name='fromCountry'
                    value={this.state.fromCountry}
                    onChange={this.onChangeHandler}
                  >
                    {countries &&
                      countries.map((country, key) => (
                        <option value={country.code} key={key}>{country.name}</option>
                      ))
                    }
                    {/* <option value='united states'>United States</option>
                    <option value='nigeria'>Nigeria</option> */}
                  </select>
                </div>
                <div>
                  <label>From (City)</label>
                  <select
                    name='fromCity'
                    value={this.state.fromCity}
                    onChange={this.onChangeHandler}
                  >
                    {this.state.fromcities &&
                      this.state.fromcities.map((city, key) => (
                        <option value={city.code} key={key}>{city.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className='country_div'>
                <div>
                  <label>To (Country)</label>
                  <select
                    name='toCountry'
                    value={this.state.toCountry}
                    onChange={this.onChangeHandler}
                  >
                    <option value='united states'>United States</option>
                    <option value='nigeria'>Nigeria</option>
                  </select>
                </div>
                <div>
                  <label>To (City)</label>
                  <select
                    name='toCity'
                    value={this.state.toCity}
                    onChange={this.onChangeHandler}
                  >
                    <option value='nyc'>New York City (NYC) </option>
                    <option value='dc'>Washington (DC) </option>
                  </select>
                </div>
              </div>
              <div className='country_div'>
                <div>
                  <label>Size of your parcel</label>
                  <select
                    name='parcelSize'
                    value={this.state.parcelSize}
                    onChange={this.onChangeHandler}
                  >
                    {/* <option value=''>Size you are willing to transport</option> */}
                    <option value='extra large'>
                      Extra Large (E.g Big box, electronics)
                </option>
                    <option value='large'>Large (E.g Laptops)</option>
                    <option value='medium'>Medium (E.g drink packs)</option>
                    <option value='small'>Small (E.g mobile phone)</option>
                  </select>
                </div>
                {/* <select>
                <option value='small'>
                  0 - 5(lbs)
                </option>
                <option value='medium'>6 - 10lbs</option>
                <option value='large'>11 - 15lbs</option>
              </select> */}
                <div>
                  <label>Weight of your parcel</label>
                  <select
                    name='parcelWeight'
                    value={this.state.parcelWeight}
                    onChange={this.onChangeHandler}
                  >
                    {/* <option value=''>
                      Select Weight of parcel in pounds (E.g 4 for 4lbs; 0.45kg for
                      1lbs)
                </option> */}
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
              {/* <textarea
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
              /> */}
              <button className='btnQ'>Find Travellers</button>
            </form>
          </div>
        </div>
        <Travelers travelers={travelers} />
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
