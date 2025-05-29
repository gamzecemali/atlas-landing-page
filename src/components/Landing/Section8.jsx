import React from 'react'
import './Section8.css'

// Import investor logos
import dominoVentures from '../../assets/images/domino-ventures.png'
import techone from '../../assets/images/techone.png'
import startupFon from '../../assets/images/startup-fon.png'
import angeleffect from '../../assets/images/angeleffect.png'

const Section8 = () => {
  const investors = [
    {
      id: 1,
      logo: dominoVentures,
      name: "Domino Ventures"
    },
    {
      id: 2,
      logo: techone,
      name: "Techone"
    },
    {
      id: 3,
      logo: startupFon,
      name: "Startup Fon"
    },
    {
      id: 4,
      logo: angeleffect,
      name: "Angel Effect"
    }
  ];

  // Duplicate investors for seamless loop
  const duplicatedInvestors = [...investors, ...investors];

  return (
    <div className="flex flex-col items-center gap-9 py-16 px-5 bg-black text-white w-full overflow-hidden">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-geometossection8-title text-5xl font-medium leading-tight tracking-[0.15em] text-center bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent  max-w-3xl m-0">
          OUR INVESTORS
        </h2>
        <p className="font-inter text-lg font-semibold leading-tight text-gray-300 text-center m-0">
          Join us on our journey to create tomorrow
        </p>
      </div>
      
      <div className="section8-ticker-wrapper relative w-full max-w-6xl overflow-hidden">
        <div className="section8-ticker-content flex items-center gap-32">
          {duplicatedInvestors.map((investor, index) => (
            <div key={`${investor.id}-${index}`} className="flex-shrink-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 flex items-center justify-center px-6 py-3 transition-all duration-300 hover:scale-105">
                <img 
                  src={investor.logo} 
                  alt={investor.name} 
                  className="max-w-full max-h-full object-contain brightness-90 contrast-110 transition-all duration-300 hover:brightness-110 hover:contrast-120" 
                />
              </div>
            </div>
          ))}
        </div>
        {/* Gradient overlays for fade effect */}
        <div className="section8-gradient-left absolute top-0 bottom-0 left-0 w-24 pointer-events-none z-10"></div>
        <div className="section8-gradient-right absolute top-0 bottom-0 right-0 w-24 pointer-events-none z-10"></div>
      </div>
    </div>
  )
}

export default Section8
