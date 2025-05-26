import React from 'react'
import Section1 from './AboutUs/Section1'
import Section2 from './AboutUs/Section2'
import Section3 from './AboutUs/Section3'
import Section41 from './AboutUs/Section41'
import Section42 from './AboutUs/Section42'
import Section43 from './AboutUs/Section43'
import Section44 from './AboutUs/Section44'
import Section6 from './AboutUs/Section6'
import ContactUsPage from './ContactUsPage'
const AboutUs = () => {
  return (
    <div className='flex flex-col '>
      <Section1 />
      <Section3 />
      <Section2 />
      <Section41 />
      <Section42 />
      <Section43 />
      <Section44 />
      <Section6 />
      <ContactUsPage />
    </div>
  )
}

export default AboutUs
