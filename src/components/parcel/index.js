import React, { useState, useEffect } from 'react'
import { postParcel } from '../../actions/parcelActions'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { fetchTravelers } from '../../actions/travelerActions'

import Travelers from './travelers'
import Modal from '../common/modal'

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
    parcelWeight: '',
    additionalInfo: '',
    travelers: travelData,
    filteredLocation: [],
    filteredDestination: [],
    countries: countriesData,
    fromcities: [],
    tocities: [],
    modalOpen: false
  })

  useEffect(() => {
    props.fetchTravelers()
  }, [])

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  // fetchCountries = () => {
  //   let countriesList = ''
  //   this.state.countries.map((country, index) => {
  //     countriesList += <option value={country[index]}>{country[index]}</option>
  //   })
  //   return countriesList
  // }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  const fetchCities = (type, country) => {
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
          },
          {
            name: 'Texas',
            code: 'tx'
          }
        ]
      })
    }
  }

  const {
    travelers: { travelers }
  } = props

  return (
    <HeaderFooter>
      <div className='maincontainer send-parcel'>
        <h1>Find Travellers</h1>
        <div className='py-2 form-group'>
          <form onSubmit={submitHandler}>
            <div className='country_div'>
              <div>
                <label>From (Country)</label>
                <select
                  name='fromCountry'
                  value={state.fromCountry}
                  onChange={onChangeHandler}
                >
                  {/* {countries &&
                    countries.map((country, key) => (
                      <option value={country.code} key={key}>
                        {country.name}
                      </option>
                    ))} */}
                  <option value='united states'>United States</option>
                  <option value='nigeria'>Nigeria</option>
                </select>
              </div>
              <div>
                <label>From (City)</label>
                <select
                  name='fromCity'
                  value={state.fromCity}
                  onChange={onChangeHandler}
                >
                  {state.fromcities &&
                    state.fromcities.map((city, key) => (
                      <option value={city.code} key={key}>
                        {city.name}
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
                  onChange={onChangeHandler}
                >
                  <option value='united states'>United States</option>
                  <option value='nigeria'>Nigeria</option>
                </select>
              </div>
              <div>
                <label>To (City)</label>
                <select
                  name='toCity'
                  value={state.toCity}
                  onChange={onChangeHandler}
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

            <button className='btnQ'>Find Travellers</button>
          </form>
        </div>
        <Travelers travelers={travelers} toggle={this.toggleModal} />
        <Modal show={this.state.modalOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
    </HeaderFooter>
  )
}

const mapStateToProps = state => ({
  travelers: state.travelers
})

export default connect(mapStateToProps, { fetchTravelers })(Parcel)
