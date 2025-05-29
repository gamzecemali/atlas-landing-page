import React from 'react'

const Card = ({ 
  title, 
  description, 
  image, 
  imageAlt, 
  position = 'left' 
}) => {
  const isLeft = position === 'left'
  
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[1200px] ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Image Section */}
      <div className="flex-shrink-0 w-full lg:w-auto">
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:w-[297px] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[314px] rounded-xl overflow-hidden mx-auto lg:mx-0">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className={`flex-1 flex flex-col justify-center gap-3 sm:gap-4 py-4 sm:py-6 items-center lg:items-start text-center lg:text-left ${!isLeft ? 'lg:items-end lg:text-right' : ''}`}>
        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 
            className={`text-lg sm:text-xl md:text-2xl font-normal leading-[1.6] tracking-[0.15em] text-transparent bg-gradient-to-br from-white to-[#DDDDDD] bg-clip-text text-center lg:text-left ${!isLeft ? 'lg:text-right' : ''} font-['Geometos',sans-serif]`}
          >
            {title}
          </h3>
        </div>
        <p 
          className={`text-sm sm:text-base font-normal leading-[1.6] tracking-[-0.03125em] text-[#A3A3A3] text-center lg:text-left ${!isLeft ? 'lg:text-right' : ''} font-sans`}
          style={{ 
            textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card 