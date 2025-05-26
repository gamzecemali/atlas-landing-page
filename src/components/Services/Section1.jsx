import React from 'react'
import backgroundImage from '../../assets/images/servicesbanner.png'

const Section1 = () => {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative h-screen w-full bg-black overflow-hidden'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <img 
          src={backgroundImage} 
          className='w-full h-full object-cover' 
          alt="Services Background"
        />
      </div>

      {/* Text Content positioned at bottom center */}
      <div className='absolute inset-0 flex flex-col items-center justify-end pb-[177px]'>
        <div className='flex flex-col items-center gap-6'>
          {/* Main Heading - Our Services */}
          <div className='text-center'>
            {/* Layer effects for "Our Services" */}
            <div className='absolute text-white text-[65px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none'>
              Our Services
            </div>
            
            <div className='absolute text-[65px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none bg-gradient-to-br from-[#4FCFE9] to-transparent bg-clip-text text-transparent'>
              Our Services
            </div>
            
            <div className='absolute text-white text-[65px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none'>
              Our Services
            </div>
            
            <div className='absolute text-[65px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none bg-gradient-to-br from-[#4FCFE9] to-transparent bg-clip-text text-transparent'>
              Our Services
            </div>
            
            <div className='absolute text-white text-[65px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none'>
              Our Services
            </div>
            
            <div className='absolute text-[65px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none bg-gradient-to-br from-white/10 via-white/20 to-white/30 bg-clip-text text-transparent'>
              Our Services
            </div>
            
            {/* Base text for proper spacing */}
            <div className='text-transparent text-[65px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none'>
              Our Services
            </div>
          </div>

          {/* Subtitle */}
          <div className='text-white text-[21px] font-bold leading-[1.64] text-center font-["Inter",sans-serif] max-w-[753px]'>
            Shaping the Future with VR, AR, AI, and More
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
