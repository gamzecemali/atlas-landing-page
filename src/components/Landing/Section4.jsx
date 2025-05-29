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
    <div className="relative w-full flex items-center justify-center py-16 sm:py-24 md:py-32 px-4 sm:px-12 md:px-16 overflow-hidden bg-black">
      {/* Background with gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <div className="absolute top-0 left-0 w-full h-full gradient-overlay"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-16 sm:gap-28 md:gap-32 w-full max-w-7xl items-center">
        {/* Top Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-12 sm:gap-20 px-6 sm:px-8 md:px-12">
          {topStatistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 sm:p-4">
              <div className="font-montserrat text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-none mb-4 sm:mb-6 drop-shadow-lg whitespace-nowrap">
                {stat.number}
              </div>
              <div className="font-montserrat text-sm sm:text-base lg:text-lg font-light text-white uppercase tracking-[0.2em] drop-shadow-md leading-relaxed max-w-[140px] sm:max-w-[180px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl gap-16 sm:gap-x-20 lg:gap-x-48 px-6 sm:px-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 sm:p-4">
              <div className="font-montserrat text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-none mb-4 sm:mb-6 drop-shadow-xl tracking-[0.15em] sm:tracking-[0.2em]">
                {achievement.title}
              </div>
              <div className="font-montserrat text-sm sm:text-base lg:text-lg font-light text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-lg leading-relaxed max-w-[200px] sm:max-w-[250px]">
                {achievement.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gradient-overlay {
          background: radial-gradient(ellipse 800px 400px at 50% 50%, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.08) 40%, transparent 70%);
        }
        @media (max-width: 640px) {
          .gradient-overlay {
            background: radial-gradient(ellipse 400px 300px at 50% 50%, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.08) 40%, transparent 70%);
          }
        }
      `}</style>
    </div>
  )
}

export default Section4
