import React from 'react'
import variant1 from '../../assets/images/s1v1.svg'
import variant2 from '../../assets/images/s2v2.svg'
import variant3 from '../../assets/images/s3v3.svg'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='relative h-screen w-full bg-black overflow-hidden'>
      {/* Background images with animation */}
      <div className='w-full h-full absolute top-0 left-0 scale-75 sm:scale-85 md:scale-90 lg:scale-100'>
        <div className='w-full h-full relative'>
          <div className="absolute top-0 left-0 w-full h-full image-variant-12">
            <img 
              src={variant1} 
              className='w-full h-full object-cover' 
              alt="Frame 1171276244" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-22">
            <img 
              src={variant2} 
              className='w-full h-full object-cover' 
              alt="Frame 1171276245" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-32">
            <img 
              src={variant3} 
              className='w-full h-full object-cover' 
              alt="Variant3" 
            />
          </div>
        </div>
      </div>

      {/* Background blur ellipse - adjusted for mobile */}
      <div className='absolute top-1/4 sm:top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-[#ADD9DC] via-[#07D2FB66] to-white opacity-40 blur-[120px] sm:blur-[140px] md:blur-[160px] lg:blur-[180px]'></div>

      {/* Side gradients */}
      <div className='absolute top-0 left-0 bg-gradient-to-b from-black to-transparent w-full h-1/4'></div>
      <div className='absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-1/4'></div>
      <div className='absolute top-0 left-[5%] bg-gradient-to-r from-black to-transparent w-1/4 h-full'></div>
      <div className='absolute top-0 right-[5%] bg-gradient-to-l from-black to-transparent w-1/4 h-full'></div>

      {/* Main content container */}
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8'>
        {/* Glassmorphism container */}
        <div className='relative w-full max-w-[320px] sm:max-w-[480px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1220px] h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[449px] bg-black/20 backdrop-blur-[150px] sm:backdrop-blur-[200px] md:backdrop-blur-[230px] lg:backdrop-blur-[259px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[67px] border border-white/10 flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-0'>
          {/* Content */}
          <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[640px] lg:max-w-[860px] xl:max-w-[1080px] px-4 sm:px-6 md:px-8 lg:px-[70px]'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[56px] font-normal leading-[1.1] tracking-[0.15em] text-center bg-gradient-to-br from-white to-[#DDDDDD] bg-clip-text text-transparent font-geometos'>
              WE ARE ATLAS TWIN
            </h1>
            <p className='text-xs sm:text-sm md:text-base lg:text-[15.75px] font-semibold leading-[1.43] tracking-[0.007em] text-center text-white font-roboto'>
              What would you do if you had a copy of yourself? A digital presentation, identical to you in every way, in an accurate digital rendering of your home, workplace, neighborhood, or city? Even better: What if the digital version of you—your digital twin—was impervious to injury, pain, or embarrassment? The mind boggles at the possibilities. Suffice it to say, you'd probably be able to make decisions for yourself with a lot more certainty of the outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
