import React from 'react'

import works_1 from '../../assets/How it works 1.png'
import works_2 from '../../assets/How it works 2.png'
import works_3 from '../../assets/How it works 3.png'

const Works = () => {
  return (
    <div id='works'>
      <h2>How it works</h2>
      <div className='send_travel'>
        <p>For Senders</p>
        <p className='lighter'>For Travelers</p>
      </div>
      <div id='works_box'>
        <div className='img'>
          <img src={works_1} alt='' />
        </div>
        <div className='img'>
          <img style={{ marginTop: '30px' }} src={works_2} alt='' />
        </div>
        <div className='img'>
          <img src={works_3} alt='' />
        </div>
      </div>
      <div className='works_words'>
        <p>
          Enter the date <br /> and destination city
        </p>
        <p>
          Get matched with <br /> a traveler
        </p>
        <p>
          Meet traveler anytime <br /> before departure
        </p>
      </div>
    </div>
  )
}

export default Works
