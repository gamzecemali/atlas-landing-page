import React from 'react'
import variant1 from '../../assets/images/s1v1.svg'
import variant2 from '../../assets/images/s2v2.svg'
import variant3 from '../../assets/images/s3v3.svg'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='relative min-h-screen w-full bg-black overflow-hidden bg-black'>
      <div className='w-full h-full absolute top-0 left-0'>
        <div className='w-full h-[85vh] sm:h-[90vh] lg:h-full relative'>
          <div className="absolute top-0 left-0 w-full h-full image-variant-11">
            <img 
              src={variant1} 
              className='w-full h-full object-contain lg:object-cover scale-[0.85] sm:scale-90 lg:scale-100' 
              alt="Frame 1171276244" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-21">
            <img 
              src={variant2} 
              className='w-full h-full object-contain lg:object-cover scale-[0.85] sm:scale-90 lg:scale-100' 
              alt="Frame 1171276245" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-31">
            <img 
              src={variant3} 
              className='w-full h-full object-contain lg:object-cover scale-[0.85] sm:scale-90 lg:scale-100' 
              alt="Variant3" 
            />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-[5%] bg-gradient-to-r from-black to-transparent w-1/4 h-full hidden lg:block'></div>
      <div className='absolute top-0 right-[5%] bg-gradient-to-l from-black to-transparent w-1/4 h-full hidden lg:block'></div>
      <div className='relative min-h-screen z-50 flex flex-col'>
        <div className='flex-[3.2]'></div>
        <div className='w-full bg-gradient-to-t from-black via-black/90 to-transparent px-4 sm:px-8 lg:px-24 pb-4 sm:pb-6 lg:pb-24 pt-12 sm:pt-16'>
          <div className='flex flex-col items-center gap-2 sm:gap-3 lg:gap-12 max-w-[90%] sm:max-w-[80%] lg:max-w-none mx-auto'>
            <div className='text-center text-white text-xl sm:text-2xl lg:text-[56px] leading-[110%] tracking-[0.15em]' style={{ fontFamily: 'Geometos', fontWeight: 400 }}>
              WE ARE ATLAS TWIN
            </div>
            <div className='text-center text-xs sm:text-sm lg:text-[18px] leading-[160%] tracking-[0.11px] text-white' style={{ fontFamily: 'Roboto', fontWeight: 600, opacity: 1 }}>
              What would you do if you had a copy of yourself? A digital presentation, identical to you in every way, in an accurate digital rendering of your home, workplace, neighborhood, or city? Even better: What if the digital version of you—your digital twin—was impervious to injury, pain, or embarrassment? The mind boggles at the possibilities. Suffice it to say, you'd probably be able to make decisions for yourself with a lot more certainty of the outcome.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
