import React from 'react'
import cardImage1 from '../../assets/images/card-image-1.png'
import cardImage2 from '../../assets/images/card-image-2.png'
import cardImage3 from '../../assets/images/card-image-3.png'

const Section5 = () => {
  const cardData = [
    {
      id: 1,
      image: cardImage1,
      title: 'VISUALIZE\nCOMPREHENSIVE DATA',
      description: 'A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.'
    },
    {
      id: 2,
      image: cardImage2,
      title: 'VISUALIZE\nCOMPREHENSIVE DATA',
      description: 'A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.'
    },
    {
      id: 3,
      image: cardImage3,
      title: 'VISUALIZE\nCOMPREHENSIVE DATA',
      description: 'A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.'
    }
  ];

  return (
    <div className="bg-black py-16 md:py-24 lg:py-32 flex flex-col items-center gap-8 md:gap-12 lg:gap-16 relative">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 md:gap-6 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="font-geometos text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-widest text-center m-0 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent uppercase">
          GAIN EXCEPTIONAL CLARITY
        </h1>
        <p className="font-inter text-base sm:text-lg font-semibold leading-relaxed text-center text-gray-300 m-0 max-w-6xl">
          Explore an unmatched holistic view of assets, operations, and possibilities with a real-time integrated digital twin.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 max-w-7xl w-full px-4 sm:px-6 lg:px-8 mb-16 md:mb-20 lg:mb-24">
        {cardData.map((card) => (
          <div key={card.id} className="relative transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:scale-105 group">
            <div className="bg-black bg-opacity-10 border border-white p-3 sm:p-4 flex flex-col items-center gap-3 relative mt-16 sm:mt-20 mx-0 transition-all duration-300 group-hover:bg-cyan-400 group-hover:bg-opacity-5 group-hover:border-cyan-400 group-hover:shadow-cyan-400 group-hover:shadow-lg">
              {/* Image Section */}
              <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={card.image} 
                  alt="Digital Twin Visualization" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:contrast-105 group-hover:shadow-cyan-400 group-hover:shadow-lg"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-center gap-4 sm:gap-6 flex-1 w-full py-2 sm:py-3">
                <h3 className="font-geometos text-xl sm:text-2xl font-semibold leading-relaxed tracking-wider text-center m-0 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent whitespace-pre-line uppercase">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed tracking-tight text-center text-gray-400 m-0 drop-shadow-lg">
                  {card.description}
                </p>
              </div>
              
              {/* Icon */}
              <div className="absolute -top-16 sm:-top-20 -left-2 sm:-left-3 w-full h-12 sm:h-14 bg-black bg-opacity-10 flex items-center pl-4 sm:pl-6 transition-all duration-300 icon-container">
                <div className="relative inline-block mr-3">
                  <svg width="16" height="16" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="bracket-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 animate-scale-pulse">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 0H1.22851H0V1.22851V6.77149V8H1.22851H2V6.77149H1.22851V1.22851H2V0ZM6 6.77149H6.77149V1.22851H6V0H6.77149H8V1.22851V6.77149V8H6.77149H6V6.77149Z" fill="#18FEFE"/>
                  </svg>
                  <div className="w-2 h-2 bg-cyan-400 relative z-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scale-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            transform: translate(-50%, -50%) scale(2);
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
          }
        }

        .animate-scale-pulse {
          animation: scale-pulse 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Section5
