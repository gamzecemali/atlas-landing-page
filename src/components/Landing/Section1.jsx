import React from 'react'
import image from '../../assets/images/landingsection1.png'
import mouseIcon from '../../assets/images/mouse-icon.svg'

const Section1 = () => {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative h-screen w-full bg-black'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img src={image} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='absolute bottom-16 sm:bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center'>
        <div className='text-white text-xs sm:text-sm mb-1 montserrat'>SCROLL</div>
        <button 
          onClick={scrollToNextSection}
          className='animate-bounce rounded-full p-2 sm:p-3 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform'
          aria-label="Scroll to next section"
        >
          <img src={mouseIcon} alt="Scroll down" className='w-4 h-6 sm:w-5 sm:h-7' />
        </button>
      </div>
      
      {/* Safe area inset for iOS devices */}
      <style jsx global>{`
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .bottom-16 {
            padding-bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
    </div>
  )
}

export default Section1
