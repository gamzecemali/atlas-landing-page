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
    <div className="bg-black py-16 flex flex-col items-center gap-16 min-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 max-w-7xl w-full px-5">
        <h1 className="font-montserrat text-5xl font-bold leading-tight tracking-widest text-center m-0 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent uppercase">
          GAIN EXCEPTIONAL CLARITY
        </h1>
        <p className="font-inter text-lg font-semibold leading-relaxed text-center text-gray-300 m-0 max-w-6xl">
          Explore an unmatched holistic view of assets, operations, and possibilities with a real-time integrated digital twin.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center gap-10 max-w-7xl w-full px-5 flex-wrap lg:flex-nowrap">
        {cardData.map((card) => (
          <div key={card.id} className="w-96 h-[584px] relative transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105 group">
            <div className="bg-black bg-opacity-10 border border-white p-4 h-full flex flex-col items-center gap-3 relative mt-20 mx-3 transition-all duration-300 group-hover:bg-cyan-400 group-hover:bg-opacity-5 group-hover:border-cyan-400 group-hover:shadow-cyan-400 group-hover:shadow-lg">
              {/* Image Section */}
              <div className="w-full h-[273px] overflow-hidden">
                <img 
                  src={card.image} 
                  alt="Digital Twin Visualization" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:contrast-105 group-hover:shadow-cyan-400 group-hover:shadow-lg"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-center gap-6 flex-1 w-full">
                <h3 className="font-montserrat text-2xl font-semibold leading-relaxed tracking-wider text-center m-0 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent whitespace-pre-line uppercase">
                  {card.title}
                </h3>
                <p className="font-roboto text-sm font-normal leading-relaxed tracking-tight text-center text-gray-400 m-0 drop-shadow-lg">
                  {card.description}
                </p>
              </div>
              
              {/* Icon */}
              <div className="absolute -top-20 -left-3 w-96 h-14 bg-black bg-opacity-10 flex items-center pl-6 transition-all duration-300 icon-container">
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

        /* Responsive adjustments for smaller screens */
        @media (min-width: 1367px) {
          .icon-container {
            top: -80px !important;
            left: -12px !important;
            width: 384px !important;
          }
        }

        @media (max-width: 1366px) and (min-width: 1024px) {
          .group {
            width: 350px !important;
            height: 520px !important;
          }
          
          .group > div {
            margin: 70px 10px 0 10px !important;
          }
          
          .group .icon-container {
            top: -70px !important;
            left: -10px !important;
            width: 350px !important;
          }
        }

        @media (max-width: 1023px) {
          .text-5xl {
            font-size: 2.5rem !important;
          }
          
          .text-lg {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 768px) {
          .py-16 {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          
          .gap-16 {
            gap: 2.5rem !important;
          }
          
          .text-5xl {
            font-size: 2rem !important;
          }
          
          .text-lg {
            font-size: 0.875rem !important;
          }
          
          .px-5 {
            padding-left: 0.625rem !important;
            padding-right: 0.625rem !important;
          }
          
          .group {
            width: 320px !important;
            height: 480px !important;
          }
          
          .group > div {
            margin: 60px 8px 0 8px !important;
            padding: 12px !important;
          }
          
          .group .icon-container {
            top: -60px !important;
            left: -8px !important;
            width: 320px !important;
            height: 48px !important;
            padding-left: 20px !important;
          }
          
          .bracket-icon {
            width: 12px !important;
            height: 12px !important;
          }
          
          .group .relative .w-2 {
            width: 6px !important;
            height: 6px !important;
          }
          
          .h-\\[273px\\] {
            height: 220px !important;
          }
          
          .text-2xl {
            font-size: 1.25rem !important;
          }
          
          .text-sm {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Section5
