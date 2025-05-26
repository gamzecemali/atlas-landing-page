import React, { useState, useEffect } from 'react'
import worldIcon from '../../assets/images/section41-world-icon.svg'
import centerDashedLine from '../../assets/images/center-dashed-line.svg'
import centerGradientVector1 from '../../assets/images/center-gradient-vector1.svg'
import centerGradientVector2 from '../../assets/images/center-gradient-vector2.svg'
import centerGradientVector3 from '../../assets/images/center-gradient-vector3.svg'
import centerGradientVector4 from '../../assets/images/center-gradient-vector4.svg'

const Section41 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to -1 to 1 range
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate transform values for different layers based on mouse position
  const getLayerTransform = (intensity = 1) => {
    const moveX = mousePosition.x * intensity * 15;
    const moveY = mousePosition.y * intensity * 15;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  // Enhanced transform with rotation and scale for center icon
  const getCenterIconTransform = (intensity = 1, rotationIntensity = 1) => {
    const moveX = mousePosition.x * intensity * 35;
    const moveY = mousePosition.y * intensity * 35;
    const rotation = mousePosition.x * rotationIntensity * 8;
    const scale = 1 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.08;
    return `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg) scale(${scale})`;
  };

  return (
    <div className='relative min-h-[140vh] sm:min-h-[130vh] md:min-h-[120vh] lg:min-h-[110vh] w-full bg-black overflow-hidden pb-32 sm:pb-36 md:pb-40 lg:pb-44'>
      {/* Background with animated concentric circles */}
      <div className='absolute inset-0 flex items-center justify-center'>
        {/* Outermost circle layer */}
        <div 
          className='absolute w-[320px] h-[320px] rounded-full border border-white/10 transition-all duration-75 ease-out'
          style={{ transform: getLayerTransform(0.3) }}
        />
        
        {/* Second circle layer */}
        <div 
          className='absolute w-[264px] h-[264px] rounded-full border border-white/15 transition-all duration-75 ease-out'
          style={{ transform: getLayerTransform(0.5) }}
        />
        
        {/* Third circle layer */}
        <div 
          className='absolute w-[290px] h-[290px] rounded-full border border-white/10 transition-all duration-75 ease-out'
          style={{ transform: getLayerTransform(0.7) }}
        />
        
        {/* Fourth circle layer with dashed border */}
        <div 
          className='absolute w-[320px] h-[320px] rounded-full border border-white/8 border-dashed transition-all duration-75 ease-out'
          style={{ 
            transform: getLayerTransform(0.9),
            borderDashArray: '1 300'
          }}
        />
        
        {/* Fifth circle layer with orange dashed border */}
        <div 
          className='absolute w-[290px] h-[290px] rounded-full border-2 border-orange-500/40 border-dashed transition-all duration-75 ease-out'
          style={{ 
            transform: getLayerTransform(1.1),
            borderDashArray: '1 300'
          }}
        />
        
        {/* Sixth circle layer with orange dashed border */}
        <div 
          className='absolute w-[264px] h-[264px] rounded-full border-2 border-orange-500/40 border-dashed transition-all duration-75 ease-out'
          style={{ 
            transform: getLayerTransform(1.3),
            borderDashArray: '1 300'
          }}
        />
        
        {/* Seventh circle layer with orange solid border */}
        <div 
          className='absolute w-[320px] h-[320px] rounded-full border-2 border-orange-500 transition-all duration-75 ease-out'
          style={{ 
            transform: getLayerTransform(1.5),
            borderDashArray: '1 300'
          }}
        />

        {/* Animated sector elements around the circles */}
        <div 
          className='absolute w-[380px] h-[380px] transition-all duration-75 ease-out'
          style={{ transform: getLayerTransform(0.8) }}
        >
          {/* Sector elements positioned around the circle */}
          {Array.from({ length: 8 }).map((_, index) => {
            const angle = (index * 45) - 90; // Start from top and go clockwise
            const radius = 160;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <div
                key={index}
                className='absolute w-8 h-8 rounded-full border border-white/50'
                style={{
                  left: `calc(50% + ${x}px - 16px)`,
                  top: `calc(50% + ${y}px - 16px)`,
                  transform: `rotate(${angle + 90}deg)`,
                }}
              />
            );
          })}
        </div>

        {/* Fourth layer - smaller circles */}
        <div 
          className='absolute w-[252px] h-[252px] transition-all duration-75 ease-out'
          style={{ transform: getLayerTransform(1.0) }}
        >
          <div className='relative w-full h-full'>
            <div className='absolute top-4 left-4 w-[220px] h-[220px] rounded-full border-2 border-white/30 border-dashed'
                 style={{ borderDashArray: '0.01 10' }} />
          </div>
        </div>

        {/* Third layer - orange dots */}
        <div 
          className='absolute w-[124px] h-[124px] sm:w-[154px] sm:h-[154px] md:w-[180px] md:h-[180px] lg:w-[204px] lg:h-[204px] transition-all duration-75 ease-out'
          style={{ transform: getLayerTransform(1.2) }}
        >
          <div className='relative w-full h-full'>
            {/* Three orange dots positioned around the circle */}
            <div className='absolute top-0.5 left-0.5 w-[118px] h-[118px] sm:w-[148px] sm:h-[148px] md:w-[174px] md:h-[174px] lg:w-[196px] lg:h-[196px] bg-orange-500 rounded-full' />
            <div className='absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 w-[118px] h-[118px] sm:w-[148px] sm:h-[148px] md:w-[174px] md:h-[174px] lg:w-[196px] lg:h-[196px] bg-orange-500 rounded-full opacity-80' />
            <div className='absolute top-1 left-1 sm:top-1.5 sm:left-1.5 lg:top-2 lg:left-2 w-[114px] h-[114px] sm:w-[142px] sm:h-[142px] md:w-[166px] md:h-[166px] lg:w-[188px] lg:h-[188px] bg-orange-500 rounded-full opacity-60' />
          </div>
        </div>

        {/* Second layer - white circles */}
        <div 
          className='absolute w-[86px] h-[86px] sm:w-[108px] sm:h-[108px] md:w-[125px] md:h-[125px] lg:w-[142px] lg:h-[142px] transition-all duration-75 ease-out'
          style={{ transform: getLayerTransform(1.4) }}
        >
          <div className='relative w-full h-full'>
            {/* Three white circles with different dash patterns */}
            <div className='absolute top-0.5 left-0.5 w-[84px] h-[84px] sm:w-[106px] sm:h-[106px] md:w-[123px] md:h-[123px] lg:w-[140px] lg:h-[140px] rounded-full border-2 border-white'
                 style={{ borderDashArray: '50 42' }} />
            <div className='absolute top-1 left-1 w-[82px] h-[82px] sm:w-[104px] sm:h-[104px] md:w-[121px] md:h-[121px] lg:w-[136px] lg:h-[136px] rounded-full border-2 border-white'
                 style={{ borderDashArray: '27 27' }} />
            <div className='absolute top-1.5 left-1.5 w-[80px] h-[80px] sm:w-[102px] sm:h-[102px] md:w-[119px] md:h-[119px] lg:w-[132px] lg:h-[132px] rounded-full border-2 border-white'
                 style={{ borderDashArray: '40 14' }} />
          </div>
        </div>

        {/* Center icon with enhanced mouse follow animation - RESPONSIVE FIGMA MATCH */}
        <div 
          className='absolute w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] md:w-[78px] md:h-[78px] lg:w-[90px] lg:h-[90px] transition-all duration-100 ease-out'
          style={{ transform: getCenterIconTransform(2.5, 1.5) }}
        >
          {/* Exact Figma Layer 1 recreation - Responsive */}
          <div className='absolute w-full h-full'>
            
            {/* Vector 9 - Dashed line - Responsive positioning */}
            <div className='absolute' style={{ 
              left: `${(26/90) * 100}%`, 
              top: '50%', 
              width: `${(38/90) * 100}%`, 
              height: '0px',
              transform: 'translateY(-50%)'
            }}>
              <img src={centerDashedLine} alt="" className='w-full h-auto opacity-50' />
            </div>
            
            {/* Ellipse 9 - Orange circle - Perfectly centered */}
            <div 
              className='absolute bg-[#FF5D18] rounded-full'
              style={{ 
                left: '50%', 
                top: '50%', 
                width: '4px', 
                height: '4px',
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            {/* Group 2 - Top left gradient vector - Responsive */}
            <div className='absolute' style={{ 
              left: `${(5/90) * 100}%`, 
              top: `${(18/90) * 100}%`, 
              width: `${(32/90) * 100}%`, 
              height: `${(15/90) * 100}%` 
            }}>
              <img src={centerGradientVector1} alt="" className='w-full h-full' />
            </div>
            
            {/* Group 4 - Bottom left gradient vector - Responsive */}
            <div className='absolute' style={{ 
              left: `${(5/90) * 100}%`, 
              top: `${(57/90) * 100}%`, 
              width: `${(32/90) * 100}%`, 
              height: `${(15/90) * 100}%` 
            }}>
              <img src={centerGradientVector2} alt="" className='w-full h-full' />
            </div>
            
            {/* Group 3 - Top right gradient vector - Responsive */}
            <div className='absolute' style={{ 
              left: `${(53/90) * 100}%`, 
              top: `${(18/90) * 100}%`, 
              width: `${(32/90) * 100}%`, 
              height: `${(15/90) * 100}%` 
            }}>
              <img src={centerGradientVector3} alt="" className='w-full h-full' />
            </div>
            
            {/* Group 5 - Bottom right gradient vector - Responsive */}
            <div className='absolute' style={{ 
              left: `${(53/90) * 100}%`, 
              top: `${(57/90) * 100}%`, 
              width: `${(32/90) * 100}%`, 
              height: `${(15/90) * 100}%` 
            }}>
              <img src={centerGradientVector4} alt="" className='w-full h-full' />
            </div>
            
            {/* Ellipse 13 - Small dot - Responsive */}
            <div 
              className='absolute bg-[#D9D9D9] rounded-full'
              style={{ 
                left: `${(36/90) * 100}%`, 
                top: `${(32/90) * 100}%`, 
                width: '2px', 
                height: '2px' 
              }}
            />
            
            {/* Ellipse 15 - Small dot - Responsive */}
            <div 
              className='absolute bg-[#D9D9D9] rounded-full'
              style={{ 
                left: `${(36/90) * 100}%`, 
                top: `${(56/90) * 100}%`, 
                width: '2px', 
                height: '2px' 
              }}
            />
            
            {/* Ellipse 14 - Small dot - Responsive */}
            <div 
              className='absolute bg-[#D9D9D9] rounded-full'
              style={{ 
                left: `${(52/90) * 100}%`, 
                top: `${(32/90) * 100}%`, 
                width: '2px', 
                height: '2px' 
              }}
            />
            
            {/* Ellipse 16 - Small dot - Responsive */}
            <div 
              className='absolute bg-[#D9D9D9] rounded-full'
              style={{ 
                left: `${(52/90) * 100}%`, 
                top: `${(56/90) * 100}%`, 
                width: '2px', 
                height: '2px' 
              }}
            />

          </div>
        </div>
      </div>

      {/* Static content cards on the sides - RESPONSIVE LAYOUT */}
      <div className='absolute inset-0 flex flex-col xl:flex-row xl:items-center xl:justify-between px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[60px] 2xl:px-[80px] 3xl:px-[120px] py-8 xl:py-0 mt-20 sm:mt-24 md:mt-28 lg:mt-32'>
        {/* Left side cards */}
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[120px] 2xl:gap-[157px] mb-8 xl:mb-0'>
          <div 
            className='w-full max-w-[384px] lg:max-w-[420px] xl:max-w-[384px] h-auto min-h-[200px] sm:min-h-[230px] lg:h-[266px] rounded-xl p-4 sm:p-5 lg:p-6 relative mx-auto xl:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-3 sm:gap-4'>
              <div className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-base sm:text-lg font-normal leading-relaxed tracking-[0.15em] mb-4 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 10.93%, #DDDDDD 97.22%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Visualize comprehensive data
                </h3>
                <p 
                  className='text-[#A3A3A3] text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
                  style={{
                    textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className='w-full max-w-[384px] lg:max-w-[420px] xl:max-w-[384px] h-auto min-h-[200px] sm:min-h-[230px] lg:h-[266px] rounded-xl p-4 sm:p-5 lg:p-6 relative mx-auto xl:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-3 sm:gap-4'>
              <div className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-base sm:text-lg font-normal leading-relaxed tracking-[0.15em] mb-4 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 10.93%, #DDDDDD 97.22%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Visualize comprehensive data
                </h3>
                <p 
                  className='text-[#A3A3A3] text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
                  style={{
                    textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side cards */}
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[120px] 2xl:gap-[157px]'>
          <div 
            className='w-full max-w-[384px] lg:max-w-[420px] xl:max-w-[384px] h-auto min-h-[200px] sm:min-h-[230px] lg:h-[266px] rounded-xl p-4 sm:p-5 lg:p-6 relative mx-auto xl:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-3 sm:gap-4'>
              <div className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-base sm:text-lg font-normal leading-relaxed tracking-[0.15em] mb-4 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 10.93%, #DDDDDD 97.22%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Visualize comprehensive data
                </h3>
                <p 
                  className='text-[#A3A3A3] text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
                  style={{
                    textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className='w-full max-w-[384px] lg:max-w-[420px] xl:max-w-[384px] h-auto min-h-[200px] sm:min-h-[230px] lg:h-[266px] rounded-xl p-4 sm:p-5 lg:p-6 relative mx-auto xl:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-3 sm:gap-4'>
              <div className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-base sm:text-lg font-normal leading-relaxed tracking-[0.15em] mb-4 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 10.93%, #DDDDDD 97.22%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Visualize comprehensive data
                </h3>
                <p 
                  className='text-[#A3A3A3] text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
                  style={{
                    textShadow: '0px 5.23px 5.23px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  A digital twin is a virtual representation of reality, including physical objects, processes, and relationships. When built on a foundation of geography, it becomes a geospatial digital twin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background grid/tracker overlay - Responsive */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        {/* Mobile grid */}
        <div className='w-full h-full grid grid-cols-20 grid-rows-12 sm:hidden'>
          {Array.from({ length: 240 }).map((_, index) => (
            <div key={index} className='border border-white/10' />
          ))}
        </div>
        {/* Tablet grid */}
        <div className='w-full h-full grid grid-cols-30 grid-rows-18 hidden sm:grid lg:hidden'>
          {Array.from({ length: 540 }).map((_, index) => (
            <div key={index} className='border border-white/10' />
          ))}
        </div>
        {/* Desktop grid */}
        <div className='w-full h-full grid grid-cols-40 grid-rows-24 hidden lg:grid'>
          {Array.from({ length: 960 }).map((_, index) => (
            <div key={index} className='border border-white/10' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section41
