import React from 'react'
import HeaderFooter from '../header_footer'
import Showcase from './showcase'
import Works from './works'
import Cargo from './cargo'
import Faqs from './faqs'
import Cta from './cta_banner'
import { BrowserRouter } from 'react-router-dom'

const index = () => {
  return (
    <BrowserRouter>
      <HeaderFooter>
        <Showcase />
        <Works />
        <Cargo />
        <Faqs />
        <Cta />
      </HeaderFooter>
    </BrowserRouter>
  )
}

export default index
