import React from 'react'
import Section1 from './Landing/Section1'
import Section2 from './Landing/Section2'
import Section3 from './Landing/Section3'
import Section4 from './Landing/Section4'
import Section5 from './Landing/Section5'
import Section6 from './Landing/Section6'
import Section7 from './Landing/Section7'
import Section8 from './Landing/Section8'
import Section9 from './Landing/Section9'
import ContactUsPage from './ContactUsPage'
const Landing = () => {
  return (
    <div className='flex flex-col '>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <ContactUsPage />
    </div>
  )
}

export default Landing
