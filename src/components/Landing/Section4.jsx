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
    <div className="relative w-full flex items-center justify-center py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16 overflow-hidden bg-black">
      {/* Background with gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <div className="absolute top-0 left-0 w-full h-full gradient-overlay"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-16 sm:gap-24 md:gap-32 w-full max-w-7xl items-center">
        {/* Top Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-10 sm:gap-6">
          {topStatistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="font-montserrat text-5xl sm:text-5xl md:text-7xl font-bold text-white leading-none mb-3 sm:mb-4 drop-shadow-lg">
                {stat.number}
              </div>
              <div className="font-montserrat text-xs sm:text-sm md:text-lg font-light text-white uppercase tracking-widest drop-shadow-md leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl gap-10 sm:gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="font-montserrat text-5xl sm:text-5xl md:text-7xl font-bold text-white leading-none mb-2 sm:mb-2.5 drop-shadow-xl tracking-widest">
                {achievement.title}
              </div>
              <div className="font-montserrat text-xs sm:text-sm md:text-lg font-light text-white uppercase tracking-widest drop-shadow-lg leading-tight">
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
      `}</style>
    </div>
  )
}

export default Section4
