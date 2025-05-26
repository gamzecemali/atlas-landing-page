import React from 'react'
import variant1 from '../../assets/images/s1v1.svg'
import variant2 from '../../assets/images/s2v2.svg'
import variant3 from '../../assets/images/s3v3.svg'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='relative h-screen w-full bg-black overflow-hidden bg-black'>
      <div className='w-full h-full absolute top-0 left-0 scale-75'>
        <div className='w-full h-full relative'>
          <div className="absolute top-0 left-0 w-full h-full image-variant-11">
            <img 
              src={variant1} 
              className='w-full h-full object-cover' 
              alt="Frame 1171276244" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-21">
            <img 
              src={variant2} 
              className='w-full h-full object-cover' 
              alt="Frame 1171276245" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-31">
            <img 
              src={variant3} 
              className='w-full h-full object-cover' 
              alt="Variant3" 
            />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-[5%] bg-gradient-to-r from-black to-transparent w-1/4 h-full'></div>
      <div className='absolute top-0 right-[5%] bg-gradient-to-l from-black to-transparent w-1/4 h-full'></div>
      <div className='absolute gap-12 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-end p-24'>
        <div className='text-5xl text-center text-white font-bold'>WE ARE ATLAS TWIN</div>
        <div className='text-sm text-center text-white'>What would you do if you had a copy of yourself? A digital presentation, identical to you in every way, in an accurate digital rendering of your home, workplace, neighborhood, or city? Even better: What if the digital version of you—your digital twin—was impervious to injury, pain, or embarrassment? The mind boggles at the possibilities. Suffice it to say, you’d probably be able to make decisions for yourself with a lot more certainty of the outcome.</div>
      </div>
    </div>
  )
}

export default Section2
