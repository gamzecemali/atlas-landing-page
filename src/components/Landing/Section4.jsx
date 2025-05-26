import React from 'react'

const Section4 = () => {
  const topStatistics = [
    { number: "400+", label: "COMPLETED PROJECTS" },
    { number: "100+", label: "VR/AR PROJECTS" },
    { number: "50+", label: "CORPORATE CUSTOMER" },
    { number: "10", label: "COUNTRY LOCATIONS" }
  ];

  const achievements = [
    { title: "TOP", subtitle: "GLOBAL XR COMPANY" },
    { title: "TOP", subtitle: "DIGITAL TWIN COMPANY" }
  ];

  return (
    <div className="relative w-full flex items-center justify-center py-32 px-16 overflow-hidden bg-black">
      {/* Background with gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <div className="absolute top-0 left-0 w-full h-full gradient-overlay"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-32 w-full max-w-7xl items-center">
        {/* Top Statistics Section */}
        <div className="flex justify-between items-center w-full gap-0 md:flex-row flex-col md:gap-0 gap-16">
          {topStatistics.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center flex-1">
                <div className="font-montserrat text-7xl font-bold text-white leading-none mb-5 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="font-montserrat text-lg text-nowrap font-light text-white uppercase tracking-widest drop-shadow-md leading-tight max-w-52">
                  {stat.label}
                </div>
              </div>
              {index < topStatistics.length - 1 && (
                <div className="flex items-center justify-center flex-shrink-0 mx-10 md:mx-10 mx-0 md:w-auto w-32 md:h-auto h-5 overflow-visible">
                  <svg width="14" height="144" viewBox="0 0 14 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-36 md:transform-none transform rotate-90 origin-center">
                    <path d="M7 0V143.688" stroke="white" strokeOpacity="0.2" strokeMiterlimit="10"/>
                    <path d="M0.5 0H13.5V0.304118H0.5V0Z" fill="#7E7E7E"/>
                    <path d="M0.5 143.696H13.5V144H0.5V143.696Z" fill="#7E7E7E"/>
                    <path d="M7 3.34526V0.304077" stroke="#7E7E7E" strokeWidth="2" strokeMiterlimit="10"/>
                    <path d="M7 143.848V140.807" stroke="#7E7E7E" strokeWidth="2" strokeMiterlimit="10"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="flex justify-center items-center gap-0 w-full max-w-4xl md:flex-row flex-col md:gap-0 gap-16">
          {achievements.map((achievement, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center flex-1">
                <div className="font-montserrat text-7xl font-bold text-white leading-none mb-2.5 drop-shadow-xl tracking-widest">
                  {achievement.title}
                </div>
                <div className="font-montserrat text-lg text-nowrap font-light text-white uppercase tracking-widest drop-shadow-lg leading-tight max-w-64">
                  {achievement.subtitle}
                </div>
              </div>
              {index < achievements.length - 1 && (
                <div className="flex items-center justify-center flex-shrink-0 mx-16 md:mx-16 mx-0 md:w-auto w-32 md:h-auto h-5 overflow-visible">
                  <svg width="14" height="144" viewBox="0 0 14 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-36 md:transform-none transform rotate-90 origin-center">
                    <path d="M7 0V143.688" stroke="white" strokeOpacity="0.2" strokeMiterlimit="10"/>
                    <path d="M0.5 0H13.5V0.304118H0.5V0Z" fill="#7E7E7E"/>
                    <path d="M0.5 143.696H13.5V144H0.5V143.696Z" fill="#7E7E7E"/>
                    <path d="M7 3.34526V0.304077" stroke="#7E7E7E" strokeWidth="2" strokeMiterlimit="10"/>
                    <path d="M7 143.848V140.807" stroke="#7E7E7E" strokeWidth="2" strokeMiterlimit="10"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gradient-overlay {
          background: radial-gradient(ellipse 800px 400px at 50% 50%, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.08) 40%, transparent 70%);
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 1200px) {
          .py-32 {
            padding-top: 5rem !important;
            padding-bottom: 5rem !important;
          }
          
          .px-16 {
            padding-left: 2.5rem !important;
            padding-right: 2.5rem !important;
          }
          
          .gap-32 {
            gap: 6.25rem !important;
          }
          
          .text-6xl {
            font-size: 4.375rem !important;
          }
          
          .text-base {
            font-size: 0.9375rem !important;
          }
          
          .text-9xl {
            font-size: 6.25rem !important;
          }
          
          .text-lg {
            font-size: 1rem !important;
          }
          
          .mx-10 {
            margin-left: 1.875rem !important;
            margin-right: 1.875rem !important;
          }
          
          .h-36 {
            height: 7.5rem !important;
          }
          
          .mx-16 {
            margin-left: 3.125rem !important;
            margin-right: 3.125rem !important;
          }
        }

        @media (max-width: 480px) {
          .py-32 {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          
          .px-16 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .gap-32 {
            gap: 3.75rem !important;
          }
          
          .text-6xl {
            font-size: 3.125rem !important;
          }
          
          .text-base {
            font-size: 0.75rem !important;
            letter-spacing: 0.0625rem !important;
          }
          
          .text-9xl {
            font-size: 3.75rem !important;
            letter-spacing: 0.125rem !important;
          }
          
          .text-lg {
            font-size: 0.8125rem !important;
            letter-spacing: 0.09375rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Section4
