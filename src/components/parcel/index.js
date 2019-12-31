import React, { useState, useEffect } from 'react'
// import { postParcel } from '../../actions/parcelActions'
import HeaderFooter from '../headerFooter'
import { connect } from 'react-redux'
import { fetchTravelers } from '../../actions/travelerActions'
import countries from '../../Countriesstate.json';

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
    fromcities: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian", "Daykondi", "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Konar", "Kondoz", "Laghman", "Lowgar", "Nangarhar", "Nimruz", "Nurestan", "Oruzgan", "Paktia", "Paktika", "Panjshir", "Parvan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"],
    tocities: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian", "Daykondi", "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Konar", "Kondoz", "Laghman", "Lowgar", "Nangarhar", "Nimruz", "Nurestan", "Oruzgan", "Paktia", "Paktika", "Panjshir", "Parvan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"],
    modalOpen: false,
    index: 0,
  })
  useEffect(() => {
    props.fetchTravelers()
  }, [])

  const onFromCountryChangeHandler = e => {
    const city = countries.countries.filter(country => country.country == e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value,
      fromcities: city[0].states
    })
  }
  const onToCountryChangeHandler = e => {
    const city = countries.countries.filter(country => country.country == e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value,
      tocities: city[0].states
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

  const toggleModal = () => {
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
                  onChange={onFromCountryChangeHandler}
                >
                  {countries.countries.map((country, index) => (
                    <option value={country.country} key={index}>{country.country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>From (City)</label>
                <select
                  name='fromCity'
                  value={state.fromCity}
                  
                >
                  {state.fromcities.map((city) => (
                    <option value={city}>{city}</option>
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
                 {countries.countries.map((country, index) => (
                    <option value={country.country} key={index}>{country.country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>To (City)</label>
                <select
                  name='toCity'
                  value={state.toCity}
                
                >
                  {state.tocities.map((city) => (
                    <option value={city}>{city}</option>
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
        <Travelers travelers={travelers} toggle={toggleModal} />
        <Modal show={state.modalOpen}
          onClose={toggleModal}>
          Here's some content for the modal
        </Modal>
        </div>
    </HeaderFooter>
  )
}

const mapStateToProps = state => ({
  travelers: state.travelers
})

export default connect(mapStateToProps, { fetchTravelers })(Parcel)
