import React from 'react'
import WorldIcon from '../../assets/world-icon.svg'

const Section42 = () => {
  const features = [
    {
      id: 1,
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin."
    },
    {
      id: 2,
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin."
    },
    {
      id: 3,
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin."
    },
    {
      id: 4,
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin."
    },
    {
      id: 5,
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin."
    },
    {
      id: 6,
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin."
    }
  ]

  return (
    <div className="flex flex-col items-stretch gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[80px] 2xl:px-[120px] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-8 sm:pb-16 md:pb-20 lg:pb-[120px] mt-24 sm:mt-28 md:mt-32 lg:mt-36">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6">
        <h2 
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-[0.15em]"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 10.93%, #DDDDDD 97.22%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          WHY ATLAS TWIN?
        </h2>
        <p 
          className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-[1.6] tracking-[-0.02083em] text-[#A3A3A3] max-w-4xl"
          style={{
            fontFamily: 'Roboto',
            textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
          }}
        >
          Geospatial digital twins provide unparalleled context and high-resolution data integration for better business decisions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-xl bg-[#0C0C0F] relative"
            style={{
              border: '1px solid transparent',
              background: 'linear-gradient(#0C0C0F, #0C0C0F) padding-box, linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%) border-box'
            }}
          >
            {/* Icon */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex-shrink-0">
              <img 
                src={WorldIcon} 
                alt="World Icon" 
                className="w-full h-full"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Content Frame */}
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-6 flex-1">
              {/* Title Frame */}
              <div className="flex flex-col justify-center self-stretch gap-4 sm:gap-5 lg:gap-6">
                <h3 
                  className="text-left text-base sm:text-lg font-normal leading-[1.6] tracking-[0.15em]"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 10.93%, #DDDDDD 97.22%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {feature.title}
                </h3>
              </div>
              
              {/* Description */}
              <p 
                className="text-left text-xs sm:text-sm font-normal leading-[1.6] tracking-[-0.03571em] text-[#A3A3A3] self-stretch"
                style={{
                  textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
                }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section42
