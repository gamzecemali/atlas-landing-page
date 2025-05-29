import React from 'react'

const Section22 = () => {
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
    <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div style={{ padding: '30px 0 10px' }}>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-normal bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent tracking-wide inline-block font-['Geometos',sans-serif]" 
              style={{ 
                lineHeight: '1.4', 
                marginBottom: '10px',
                position: 'relative',
                top: '-10px'
              }}
            >
              DIGITAL TWIN
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 font-semibold max-w-4xl mx-auto leading-relaxed tracking-tight mt-4 font-sans">
            Geospatial digital twins provide unparalleled context and high-resolution data integration for better business decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="relative bg-[#0C0C0F] rounded-xl p-6 overflow-hidden"
              style={{
                background: '#0C0C0F',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              {/* Corner SVG */}
              <div className="absolute bottom-0 right-0">
                <svg width="173" height="140" viewBox="0 0 173 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_12303_27881)">
                    <path d="M60 61H112V79.54" stroke="white" strokeMiterlimit="10" shapeRendering="crispEdges"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_12303_27881" x="0" y="0.5" width="172.5" height="139.04" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset/>
                      <feGaussianBlur stdDeviation="30"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12303_27881"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12303_27881" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              {/* Icon */}
              <div className="w-10 h-10 mb-4">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.5003 6.07886L26.0553 7.91219C25.4783 8.34493 24.7766 8.57886 24.0553 8.57886H18.4587C17.9163 8.57907 17.3873 8.74695 16.944 9.05951C16.5008 9.37206 16.165 9.814 15.9827 10.3248C15.8004 10.8356 15.7805 11.3903 15.9257 11.9128C16.0708 12.4354 16.374 12.9003 16.7937 13.2439L20.127 15.9705C21.418 17.0268 22.4243 18.3892 23.0543 19.9338C23.6842 21.4784 23.9178 23.156 23.7337 24.8139L23.657 25.5089C23.553 26.442 23.3508 27.3615 23.0537 28.2522L22.667 29.4122M0.166992 13.5789L5.56366 12.6789C6.08714 12.5915 6.62392 12.6304 7.12934 12.7923C7.63477 12.9542 8.09423 13.2344 8.46951 13.6097C8.84478 13.985 9.12503 14.4444 9.28693 14.9498C9.44883 15.4553 9.48771 15.992 9.40033 16.5155L9.17533 17.8605C8.98082 19.0337 9.16715 20.2384 9.70701 21.298C10.2469 22.3577 11.1119 23.2165 12.1753 23.7489C13.0247 24.1729 13.7038 24.8742 14.1002 25.7368C14.4967 26.5994 14.5867 27.5715 14.3553 28.4922L13.5003 31.9122" stroke="#A3A3A3" strokeWidth="2"/>
                  <path d="M16 31.0789C24.2843 31.0789 31 24.3631 31 16.0789C31 7.79459 24.2843 1.07886 16 1.07886C7.71573 1.07886 1 7.79459 1 16.0789C1 24.3631 7.71573 31.0789 16 31.0789Z" stroke="#A3A3A3" strokeWidth="2"/>
                </svg>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-normal bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent tracking-wide leading-relaxed font-['Geometos',sans-serif]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed tracking-tight font-sans" style={{ textShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section22
