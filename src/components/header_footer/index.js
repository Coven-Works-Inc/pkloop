import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

class index extends Component {
  render () {
    return (
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    )
  }
}

export default index
