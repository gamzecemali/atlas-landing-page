import React from 'react'
import Card from './Card'
import digitalTwinAR from '../../assets/images/digital-twin-ar.png'
import digitalTwinCity from '../../assets/images/digital-twin-city.png'

const Section43 = () => {
  const cardData = [
    {
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.",
      image: digitalTwinAR,
      imageAlt: "Futuristic augmented reality visualization",
      position: "left"
    },
    {
      title: "Visualize comprehensive data", 
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.",
      image: digitalTwinCity,
      imageAlt: "Digital city visualization",
      position: "right"
    },
    {
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.",
      image: digitalTwinCity,
      imageAlt: "Digital city visualization", 
      position: "left"
    },
    {
      title: "Visualize comprehensive data",
      description: "A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.",
      image: digitalTwinCity,
      imageAlt: "Digital city visualization",
      position: "right"
    }
  ]

  return (
    <div 
      className="flex flex-col items-center justify-center w-full gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[80px] 2xl:px-[120px] py-8 sm:py-12 md:py-16"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-opacity=\'0.1\'%3E%3Cpolygon fill=\'%23000\' points=\'50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\'/%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: 'cover'
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-[0.15em] text-center text-transparent bg-gradient-to-br from-white to-[#DDDDDD] bg-clip-text font-['Geometos',sans-serif]"
        >
          Digital Twin
        </h2>
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-[1.6] tracking-[-0.02083em] text-center text-[#A3A3A3] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4 sm:px-0 font-sans"
          style={{ 
            textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
          }}
        >
          Geospatial digital twins provide unparalleled context and high-resolution data integration for better business decisions.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            imageAlt={card.imageAlt}
            position={card.position}
          />
        ))}
      </div>
    </div>
  )
}

export default Section43
