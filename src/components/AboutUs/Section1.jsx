import React from 'react'
import backgroundImage from '../../assets/images/about-us-bg.png'

const Section1 = () => {
  return (
    <div className='relative h-screen w-full bg-black overflow-hidden'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <img 
          src={backgroundImage} 
          className='w-full h-full object-cover' 
          alt="About Us Background"
        />
      </div>

      {/* Fixed About US Text */}
      <div className='absolute inset-0 flex items-center justify-center'>
        {/* Main text with shadow effect */}
        <div className='relative'>
          <div className='text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>
            About US
          </div>
          
          {/* Decorative gradient overlay */}
          <div className='absolute inset-0 text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none bg-gradient-to-b from-[#4FCFE9]/30 to-transparent bg-clip-text text-transparent'>
            About US
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div 
        className='absolute bottom-0 left-0 w-full h-[177px] pointer-events-none'
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 92.5%)'
        }}
      />
    </div>
  )
}

export default Section1
