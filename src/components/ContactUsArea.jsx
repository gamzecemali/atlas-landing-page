import React from 'react'
import ContactUsPage from './ContactUsPage'
import Section6 from './AboutUs/Section6'
import Img from '../assets/images/contantimg.png'

const ContactUsArea = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-svh w-full relative'>
        <ContactUsPage />
        <img src={Img} alt="" className='w-full h-full object-contain absolute top-0 left-0'/>
      </div>
      <div className='h-svh w-full'>
      <Section6/>
      </div>
    </div>
  )
}

export default ContactUsArea
