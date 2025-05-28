import React from 'react'
import backgroundImage from '../../assets/images/section6-background.png'

const Section6 = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          opacity: 0.8
        }}
      />
      
      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-6xl px-4 sm:px-8 md:px-16 lg:px-32 text-center py-16">
        <h2 className="font-geometos font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[0.15em] text-white">
          DIGITAL TWIN
        </h2>
        <p className="font-roboto font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-white max-w-4xl">
          Geospatial digital twins provide unparalleled context and high-resolution data integration for better business decisions.
        </p>
      </div>
    </div>
  )
}

export default Section6
