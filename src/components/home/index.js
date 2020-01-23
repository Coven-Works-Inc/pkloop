import React from 'react'
import HeaderFooter from '../headerFooter'
import Showcase from './showcase'
import Works from './works'
import Cargo from './cargo'
import Faqs from './faqs'
import Cta from './cta_banner'

const index = (props) => {
  return (
    <HeaderFooter redirect={props.location}>
      <Showcase />
      <Works />
      <Cargo />
      <Faqs />
      <Cta />
    </HeaderFooter>
  )
}

export default index
