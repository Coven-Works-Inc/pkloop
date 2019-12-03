import React from 'react'
import HeaderFooter from '../header_footer'
import Showcase from './showcase'
import Works from './works'
import Cargo from './cargo'
import Faqs from './faqs'
import Cta from './cta_banner'

const index = () => {
  return (
    <HeaderFooter>
      <Showcase />
      <Works />
      <Cargo />
      <Faqs />
      <Cta />
    </HeaderFooter>
  )
}

export default index
