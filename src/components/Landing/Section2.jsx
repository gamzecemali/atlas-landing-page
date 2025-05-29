import React from 'react'
import variant1 from '../../assets/images/s1v1.svg'
import variant2 from '../../assets/images/s2v2.svg'
import variant3 from '../../assets/images/s3v3.svg'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center px-4 sm:px-8 lg:px-24'>
      <div className='w-full max-w-[1200px] mx-auto relative'>
        <div className='relative aspect-[16/9] w-full'>
          <div className="absolute top-0 left-0 w-full h-full image-variant-11">
            <img 
              src={variant1} 
              className='w-full h-full object-contain' 
              alt="Frame 1171276244" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-21">
            <img 
              src={variant2} 
              className='w-full h-full object-contain' 
              alt="Frame 1171276245" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-31">
            <img 
              src={variant3} 
              className='w-full h-full object-contain' 
              alt="Variant3" 
            />
          </div>
        </div>

        <div className='absolute bottom-0 left-0 w-full translate-y-[75%] flex flex-col items-center gap-0'>
          <div className='text-center text-white text-xl sm:text-2xl lg:text-[56px] leading-[110%] tracking-[0.15em] bg-black/50 px-4 py-1 rounded-lg backdrop-blur-sm' style={{ fontFamily: 'Geometos', fontWeight: 400 }}>
            WE ARE ATLAS TWIN
          </div>
          <div className='text-center text-xs sm:text-sm lg:text-[18px] leading-[160%] tracking-[0.11px] text-white max-w-[800px] bg-black/90 px-4 py-2 sm:px-4 sm:py-3 rounded-lg backdrop-blur-sm' style={{ fontFamily: 'Roboto', fontWeight: 600, opacity: 1 }}>
            What would you do if you had a copy of yourself? A digital presentation, identical to you in every way, in an accurate digital rendering of your home, workplace, neighborhood, or city? Even better: What if the digital version of you—your digital twin—was impervious to injury, pain, or embarrassment? The mind boggles at the possibilities. Suffice it to say, you'd probably be able to make decisions for yourself with a lot more certainty of the outcome.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
