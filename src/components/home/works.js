import React, { Component } from 'react'

import works_1 from '../../assets/How it works 1.png'
import works_2 from '../../assets/How it works 2.png'
import works_3 from '../../assets/How it works 3.png'

class Works extends Component {
  state = {
    sender: true
  }

  handleTraveller = () => {
    this.setState({ sender: false });
  }

  handleSender = () => {
    this.setState({ sender: true });
  }

  render() {
    const { sender } = this.state;
    return (
      <div id='works' className="works">
        <h2>How it works</h2>
        <div className='send_travel'>
          <p className={!sender ? 'lighter' : ''} onClick={this.handleSender}>For Senders</p>
          <p className={sender ? 'lighter' : ''} onClick={this.handleTraveller}>For Travelers</p>
        </div>
        {sender && <div id='works_box'>
          <div className='works_item'>
            <img src={works_1} alt='' />
            <p>
              Enter the date <br /> and destination city
          </p>
          </div>
          <div className='works_item'>
            <img src={works_2} alt='' />
            <p>
              Get matched with <br /> a traveler
          </p>
          </div>
          <div className='works_item'>
            <img src={works_3} alt='' />
            <p>
              Meet traveler at least <br /> 2 hours before departure.
          </p>
          </div>
        </div>}
        {!sender && <div id='works_box'>
          <div className='works_item'>
            <img src={works_1} alt='' />
            <p>
              Enter the date <br /> and destination city
          </p>
          </div>
          <div className='works_item'>
            <img src={works_2} alt='' />
            <p>
              Get matched with <br /> a sender
          </p>
          </div>
          <div className='works_item'>
            <img src={works_3} alt='' />
            <p>
              Meet sender at least <br /> 2 hours before departure.
          </p>
          </div>
        </div>}
      </div>
    )
  }

}

export default Works
