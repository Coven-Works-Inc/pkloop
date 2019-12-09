import React from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'
import Cta from '../home/cta_banner'

import './pricing.css'

const Pricing = () => {
  return (
    <HeaderFooter>
      <Banner title='Pricing Guide' />
      <div id='pricing-container'>
        <div className='price-card'>
          <h3>US & Canada</h3>
          <hr
            style={{
              marginTop: '2.5rem',
              height: '1px',
              background: '#aaa',
              border: 'none'
            }}
          />
          <div
            style={{
              marginTop: '1.5rem',
              marginLeft: '1rem',
              color: '#0071bc',
              display: 'flex',
              justifyContent: 'flex-start',
              fontWeight: 'bold',
              fontSize: '1.15rem'
            }}
          >
            <p>WEIGHT </p>
            <p style={{ color: '#333', marginLeft: '10rem' }}>COST</p>
          </div>

          <hr
            style={{
              marginTop: '1.5rem',
              height: '4px',
              background: '#aaa',
              border: 'none'
            }}
          />
          <div
            style={{
              marginTop: '1.5rem',
              marginLeft: '1.2rem',
              color: '#0071bc',
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: '1rem'
            }}
          >
            <p>0 - 5lbs </p>
            <p style={{ color: '#333', marginLeft: '11rem' }}>$14.99</p>
          </div>
          <hr
            style={{
              marginTop: '1.5rem',
              height: '1px',
              background: '#aaa',
              border: 'none'
            }}
          />
          <div
            style={{
              marginTop: '1.5rem',
              marginLeft: '1.2rem',
              color: '#0071bc',
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: '1rem'
            }}
          >
            <p> > 5lbs </p>
            <p style={{ color: '#333', marginLeft: '11.7rem' }}>
              $14.99 + 1.5/lb
            </p>
          </div>
          <hr
            style={{
              marginTop: '1.5rem',
              height: '1px',
              background: '#aaa',
              border: 'none'
            }}
          />
        </div>
        <div className='price-card'>
          <h3>International</h3>
          <hr
            style={{
              marginTop: '2.5rem',
              height: '1px',
              background: '#aaa',
              border: 'none'
            }}
          />
          <div
            style={{
              marginTop: '1.5rem',
              marginLeft: '1rem',
              color: '#0071bc',
              display: 'flex',
              justifyContent: 'flex-start',
              fontWeight: 'bold',
              fontSize: '1.15rem'
            }}
          >
            <p>WEIGHT </p>
            <p style={{ color: '#333', marginLeft: '10rem' }}>COST</p>
          </div>

          <hr
            style={{
              marginTop: '1.5rem',
              height: '4px',
              background: '#aaa',
              border: 'none'
            }}
          />
          <div
            style={{
              marginTop: '1.5rem',
              marginLeft: '1.2rem',
              color: '#0071bc',
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: '1rem'
            }}
          >
            <p>0 - 5lbs </p>
            <p style={{ color: '#333', marginLeft: '11rem' }}>$24.99</p>
          </div>
          <hr
            style={{
              marginTop: '1.5rem',
              height: '1px',
              background: '#aaa',
              border: 'none'
            }}
          />
          <div
            style={{
              marginTop: '1.5rem',
              marginLeft: '1.2rem',
              color: '#0071bc',
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: '1rem'
            }}
          >
            <p> > 5lbs </p>
            <p style={{ color: '#333', marginLeft: '11.7rem' }}>$5.99/lb</p>
          </div>
          <hr
            style={{
              marginTop: '1.5rem',
              height: '1px',
              background: '#aaa',
              border: 'none'
            }}
          />
        </div>
      </div>
      <Cta />
    </HeaderFooter>
  )
}

export default Pricing
