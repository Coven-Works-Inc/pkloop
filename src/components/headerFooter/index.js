import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

class index extends Component {
  render() {
    return (
      <div>
        <Header redirect={this.props.redirect} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default index
