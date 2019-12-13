import React from 'react'
import HeaderFooter from '../headerFooter'
import Banner from '../common/banner'

const Contact = () => {
  const handleSubmit = () => {
    console.log('form submitted')
  }
  return (
    <HeaderFooter>
      <Banner title='Get in Touch With Us' />
      <div className='contact-content-holder'>
        <div className='contact-content'>
          <div className='contact-map-section'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107451.30179088314!2d-97.09085217021435!3d32.689949516481484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e88c445b79661%3A0x8ee7ac248eb7e7d1!2sGrand%20Prairie%2C%20TX%2075052%2C%20USA!5e0!3m2!1sen!2sng!4v1575905514191!5m2!1sen!2sng'
              style={{ width: '600', height: '450', border: 0 }}
              title='our-office-address'
              frameborder='0'
              allowfullscreen=''
            />
          </div>
          <div className='contact-form-section'>
            <form onSubmit={() => handleSubmit()}>
              <h2>Send a Quick Message</h2>
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Last Name' />
              <input type='tel' placeholder='Telephone' />
              <input type='email' placeholder='E-mail' />
              <textarea placeholder='Type your message here' />
              <div className='button-space'>
                <button>SUBMIT</button>
                <p>Or Send a direct email to contact@mypkloop.com</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HeaderFooter>
  )
}

export default Contact
