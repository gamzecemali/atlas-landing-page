import React from 'react'
import backgroundImage from '../../assets/images/aboutus-image.png'

const Section6 = () => {
  return (
    <div className="relative w-full h-svh flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Gradient Overlay - Radial from center transparent to background */}
      <div className="absolute top-0 left-0 w-full h-3/12 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-3/12 bg-gradient-to-b from-black/50 to-transparent" />
      
      {/* Content */}
      <div className="overflow-visible relative z-10 flex flex-col items-center gap-6 max-w-6xl px-8 md:px-16 lg:px-32 text-center">
        <h2 className="overflow-visible font-geometos font-normal text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[0.15em] text-white">
          Digital Twin
        </h2>
        <p className="overflow-visible font-roboto font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-white max-w-4xl">
          Geospatial digital twins provide unparalleled context and high-resolution data integration for better business decisions.
        </p>
      </div>
    </div>
  )
}

export default Section6
