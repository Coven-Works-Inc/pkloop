import React, { Component } from 'react'
import HeaderFooter from '../header_footer'
import './parcel.css'

class Parcel extends Component {
  state = {}

  submitHandler = e => {
    e.preventDefault()
  }
  render () {
    const text = 'Meaning'

    return (
      <HeaderFooter>
        <div className='container'>
          <h1>Send parcel</h1>
          <div className='py-2 form-group'>
            <form onSubmit={this.submitHandler}>
              <input type='text' placeholder='City, Country' /> <br />
              <input type='text' placeholder='City, Country' /> <br />
              <select>
                <option value='extra large' selected='selected'>
                  Extra large (E.g Big box, electronics)
                </option>
                <option value='large'>large (E.g Laptops)</option>
                <option value='medium'>medium (E.g drink packs)</option>
                <option value='small'>small (E.g mobile phone)</option>
              </select>
              <br />
              <select>
                <option value='small' selected='selected'>
                  0 - 5lbs
                </option>
                <option value='medium'>6 - 10lbs</option>
                <option value='large'>11 - 15lbs</option>
              </select>
            </form>
          </div>
          <button className='btnQ'>Find Travellers</button>
        </div>
      </HeaderFooter>
    )
  }
}

export default Parcel
