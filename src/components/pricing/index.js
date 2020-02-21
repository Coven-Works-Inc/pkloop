import React from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'
import Cta from '../home/cta_banner'

import './pricing.css'
import PricingDocument from '../../assets/ShippingCostComparison.pdf'

const Pricing = (props) => {
  return (
    <HeaderFooter redirect={props.location}>
      <Banner title='Pricing Guide Title' />
      <div id='pricing-container'>
        <div className='price-card'>
          <h3>US & Canada</h3>
          <div className="pricing-head">
            <p>WEIGHT </p>
            <p>COST</p>
          </div>

          <div className="pricing-item">
            <p>0 - 5lbs </p>
            <p>$14.99</p>
          </div>
          <div className="pricing-item">
            <p> > 5lbs </p>
            <p>$14.99 + $1.5/lb</p>
          </div>
          <div className="base-tagline">
            <img src={require('../../assets/insurancetip.png')} alt="icon for insurance and tips" />
            <small>Insurance (2%) and tips are optional</small>
          </div>
        </div>
        <div className='price-card'>
          <h3>International</h3>
          <div className="pricing-head">
            <p>WEIGHT </p>
            <p>COST</p>
          </div>

          <div className="pricing-item">
            <p>0 - 5lbs </p>
            <p>$24.99</p>
          </div>
          <div className="pricing-item">
            <p> > 5lbs </p>
            <p>$5.99/lb</p>
          </div>
          <div className='base-tagline'>
            <p><a href={PricingDocument} target='_blank'>Download Shipping Cost Comparison</a></p>
          </div>
        </div>
      </div>
      <Cta />
    </HeaderFooter>
  )
}

export default Pricing
