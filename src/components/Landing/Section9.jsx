import React from 'react'

const Section9 = () => {
  // Pulse dot component with animation
  const PulseDot = ({ className, delay = 0 }) => (
    <div className={`absolute ${className}`}>
      <div className="relative w-20 h-20">
        {/* Outer pulsing ring */}
        <div 
          className="absolute inset-0 rounded-full border border-cyan-400 bg-cyan-400/20 animate-ping"
          style={{ animationDelay: `${delay}ms`, animationDuration: '2s' }}
        ></div>
        {/* Inner dot */}
        <div 
          className="absolute top-7 left-7 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: `${delay}ms` }}
        ></div>
      </div>
    </div>
  )

  return (
    <div className="relative w-full flex flex-col items-center gap-16 py-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[1200px]">
        <h2 className="text-4xl md:text-5xl font-normal text-center bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent tracking-[0.15em] leading-tight">
          OUR WORKING PROCESS
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-white text-center leading-relaxed tracking-tight drop-shadow-lg max-w-4xl">
          A digital twin is a virtual replica of a physical object, system, or process that continuously updates in real-time using data to optimize performance and predict future outcomes. When creating a digital twin we use the following data.
        </p>
      </div>

      {/* Background Image with Animated Dots */}
      <div className="relative min-w-[1300px] w-full h-[970px] bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute -left-0 -top-[369px] w-full h-[1292px] opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('/section9-bg.png')`,
            transform: 'scaleX(-1)'
          }}
        ></div>

        {/* Animated Pulse Dots */}
        <div className='absolute -top-12 left-0 w-full h-full'>
        <PulseDot className="top-[27.9%] left-[53.1%]" delay={0} />
        <PulseDot className="top-[38.6%] left-[92.5%]" delay={300} />
        <PulseDot className="top-[40.2%] left-[57.0%]" delay={600} />
        <PulseDot className="top-[55.7%] left-[69.8%]" delay={900} />
        <PulseDot className="top-[50.9%] left-[41.7%]" delay={1200} />
        <PulseDot className="top-[32.1%] left-[73.1%]" delay={1500} />
        <PulseDot className="top-[38.5%] left-[36.0%]" delay={1800} />
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[286px] bg-gradient-to-t from-black via-black/75 to-transparent"></div>
      </div>
    </div>
  )
}

export default Section9
