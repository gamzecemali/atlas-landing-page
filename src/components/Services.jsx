import React from 'react'
import Section1 from './Services/Section1'
import SliderComp from './Services/SliderComp'
import Section21 from './Services/Section21'
import Section22 from './Services/Section22'
import ContactUsPage from './ContactUsPage'
const Services = () => {
  return (
    <div className='flex flex-col '>
      <Section1 />
      <SliderComp />
      <Section21 />
      <Section22 />
      <ContactUsPage />
    </div>
  )
}

export default Services
