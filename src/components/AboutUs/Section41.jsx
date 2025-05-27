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
    <div className='relative min-h-[140vh] sm:min-h-screen w-full bg-black overflow-hidden pb-10 sm:pb-20 md:pb-28 lg:pb-32 pt-10 sm:pt-20 md:pt-28 lg:pt-32'>
      {/* Background with animated concentric circles */}
      <div className='absolute inset-0 flex items-center justify-center'>
        {/* Outermost circle layer */}
        <div 
          className='absolute w-[200px] xs:w-[240px] sm:w-[300px] md:w-[320px] rounded-full border border-white/10 transition-all duration-75 ease-out aspect-square'
          style={{ transform: getLayerTransform(0.3) }}
        />
        
        {/* Second circle layer */}
        <div 
          className='absolute w-[170px] xs:w-[200px] sm:w-[250px] md:w-[264px] rounded-full border border-white/15 transition-all duration-75 ease-out aspect-square'
          style={{ transform: getLayerTransform(0.5) }}
        />
        
        {/* Third circle layer */}
        <div 
          className='absolute w-[180px] xs:w-[220px] sm:w-[270px] md:w-[290px] rounded-full border border-white/10 transition-all duration-75 ease-out aspect-square'
          style={{ transform: getLayerTransform(0.7) }}
        />
        
        {/* Fourth circle layer with dashed border */}
        <div 
          className='absolute w-[200px] xs:w-[240px] sm:w-[300px] md:w-[320px] rounded-full border border-white/8 border-dashed transition-all duration-75 ease-out aspect-square'
          style={{ 
            transform: getLayerTransform(0.9),
            borderDashArray: '1 300'
          }}
        />
        
        {/* Fifth circle layer with orange dashed border */}
        <div 
          className='absolute w-[180px] xs:w-[220px] sm:w-[270px] md:w-[290px] rounded-full border-2 border-orange-500/40 border-dashed transition-all duration-75 ease-out aspect-square'
          style={{ 
            transform: getLayerTransform(1.1),
            borderDashArray: '1 300'
          }}
        />
        
        {/* Sixth circle layer with orange dashed border */}
        <div 
          className='absolute w-[170px] xs:w-[200px] sm:w-[250px] md:w-[264px] rounded-full border-2 border-orange-500/40 border-dashed transition-all duration-75 ease-out aspect-square'
          style={{ 
            transform: getLayerTransform(1.3),
            borderDashArray: '1 300'
          }}
        />
        
        {/* Seventh circle layer with orange solid border */}
        <div 
          className='absolute w-[200px] xs:w-[240px] sm:w-[300px] md:w-[320px] rounded-full border-2 border-orange-500 transition-all duration-75 ease-out aspect-square'
          style={{ 
            transform: getLayerTransform(1.5),
            borderDashArray: '1 300'
          }}
        />

        {/* Animated sector elements around the circles */}
        <div 
          className='absolute w-[240px] xs:w-[280px] sm:w-[360px] md:w-[380px] transition-all duration-75 ease-out aspect-square'
          style={{ transform: getLayerTransform(0.8) }}
        >
          {/* Sector elements positioned around the circle */}
          {Array.from({ length: 8 }).map((_, index) => {
            const angle = (index * 45) - 90; // Start from top and go clockwise
            const radius = 100; // Smaller radius for better fit on small screens
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <div
                key={index}
                className='absolute w-4 xs:w-5 sm:w-7 md:w-8 aspect-square rounded-full border border-white/50'
                style={{
                  left: `calc(50% + ${x}px - 8px)`,
                  top: `calc(50% + ${y}px - 8px)`,
                  transform: `rotate(${angle + 90}deg)`,
                }}
              />
            );
          })}
        </div>

        {/* Fourth layer - smaller circles */}
        <div 
          className='absolute w-[160px] xs:w-[190px] sm:w-[240px] md:w-[252px] transition-all duration-75 ease-out aspect-square'
          style={{ transform: getLayerTransform(1.0) }}
        >
          <div className='relative w-full h-full'>
            <div className='absolute top-3 left-3 sm:top-4 sm:left-4 w-[calc(100%-24px)] sm:w-[calc(100%-32px)] aspect-square rounded-full border-2 border-white/30 border-dashed'
                 style={{ borderDashArray: '0.01 10' }} />
          </div>
        </div>

        {/* Third layer - orange dots */}
        <div 
          className='absolute w-[90px] xs:w-[110px] sm:w-[154px] md:w-[180px] lg:w-[204px] transition-all duration-75 ease-out aspect-square'
          style={{ transform: getLayerTransform(1.2) }}
        >
          <div className='relative w-full h-full'>
            {/* Three orange dots positioned around the circle */}
            <div className='absolute top-0.5 left-0.5 w-[calc(100%-4px)] aspect-square bg-orange-500 rounded-full' />
            <div className='absolute top-1.5 left-1.5 sm:top-3 sm:left-3 lg:top-4 lg:left-4 w-[calc(100%-6px)] sm:w-[calc(100%-8px)] aspect-square bg-orange-500 rounded-full opacity-80' />
            <div className='absolute top-1 left-1 sm:top-1.5 sm:left-1.5 lg:top-2 lg:left-2 w-[calc(100%-5px)] sm:w-[calc(100%-6px)] aspect-square bg-orange-500 rounded-full opacity-60' />
          </div>
        </div>

        {/* Second layer - white circles */}
        <div 
          className='absolute w-[60px] xs:w-[75px] sm:w-[108px] md:w-[125px] lg:w-[142px] transition-all duration-75 ease-out aspect-square'
          style={{ transform: getLayerTransform(1.4) }}
        >
          <div className='relative w-full h-full'>
            {/* Three white circles with different dash patterns */}
            <div className='absolute top-0.5 left-0.5 w-[calc(100%-3px)] sm:w-[calc(100%-4px)] aspect-square rounded-full border border-white sm:border-2'
                 style={{ borderDashArray: '50 42' }} />
            <div className='absolute top-1 left-1 w-[calc(100%-6px)] sm:w-[calc(100%-8px)] aspect-square rounded-full border border-white sm:border-2'
                 style={{ borderDashArray: '27 27' }} />
            <div className='absolute top-1.5 left-1.5 w-[calc(100%-9px)] sm:w-[calc(100%-12px)] aspect-square rounded-full border border-white sm:border-2'
                 style={{ borderDashArray: '40 14' }} />
          </div>
        </div>

        {/* Center icon with enhanced mouse follow animation - RESPONSIVE FIGMA MATCH */}
        <div 
          className='absolute w-[40px] xs:w-[48px] sm:w-[68px] md:w-[78px] lg:w-[90px] transition-all duration-100 ease-out aspect-square'
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
                width: '3px', 
                height: '3px',
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
                width: '1px', 
                height: '1px' 
              }}
            />
            
            {/* Ellipse 15 - Small dot - Responsive */}
            <div 
              className='absolute bg-[#D9D9D9] rounded-full'
              style={{ 
                left: `${(36/90) * 100}%`, 
                top: `${(56/90) * 100}%`, 
                width: '1px', 
                height: '1px' 
              }}
            />
            
            {/* Ellipse 14 - Small dot - Responsive */}
            <div 
              className='absolute bg-[#D9D9D9] rounded-full'
              style={{ 
                left: `${(52/90) * 100}%`, 
                top: `${(32/90) * 100}%`, 
                width: '1px', 
                height: '1px' 
              }}
            />
            
            {/* Ellipse 16 - Small dot - Responsive */}
            <div 
              className='absolute bg-[#D9D9D9] rounded-full'
              style={{ 
                left: `${(52/90) * 100}%`, 
                top: `${(56/90) * 100}%`, 
                width: '1px', 
                height: '1px' 
              }}
            />

          </div>
        </div>
      </div>

      {/* Static content cards on the sides - RESPONSIVE LAYOUT */}
      <div className='absolute inset-0 flex flex-col md:flex-row md:items-center md:justify-between px-3 xs:px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[60px] 2xl:px-[80px] 3xl:px-[120px] py-8 md:py-0 mt-10 sm:mt-0'>
        {/* Left side cards */}
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[120px] 2xl:gap-[157px] mb-8 md:mb-0'>
          <div 
            className='w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[384px] h-auto min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] rounded-xl p-3 xs:p-4 sm:p-5 lg:p-6 relative mx-auto md:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-2 xs:gap-3 sm:gap-4'>
              <div className='w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-sm xs:text-base sm:text-lg font-normal leading-relaxed tracking-[0.12em] xs:tracking-[0.15em] mb-2 xs:mb-3 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
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
                  className='text-[#A3A3A3] text-[10px] xs:text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
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
            className='w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[384px] h-auto min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] rounded-xl p-3 xs:p-4 sm:p-5 lg:p-6 relative mx-auto md:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-2 xs:gap-3 sm:gap-4'>
              <div className='w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-sm xs:text-base sm:text-lg font-normal leading-relaxed tracking-[0.12em] xs:tracking-[0.15em] mb-2 xs:mb-3 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
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
                  className='text-[#A3A3A3] text-[10px] xs:text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
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
            className='w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[384px] h-auto min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] rounded-xl p-3 xs:p-4 sm:p-5 lg:p-6 relative mx-auto md:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-2 xs:gap-3 sm:gap-4'>
              <div className='w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-sm xs:text-base sm:text-lg font-normal leading-relaxed tracking-[0.12em] xs:tracking-[0.15em] mb-2 xs:mb-3 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
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
                  className='text-[#A3A3A3] text-[10px] xs:text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
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
            className='w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[384px] h-auto min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] rounded-xl p-3 xs:p-4 sm:p-5 lg:p-6 relative mx-auto md:mx-0'
            style={{
              background: '#0C0C0F',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0F, #0C0C0F), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.3) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className='flex items-start gap-2 xs:gap-3 sm:gap-4'>
              <div className='w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0'>
                <img src={worldIcon} alt="World Icon" className='w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 
                  className='text-sm xs:text-base sm:text-lg font-normal leading-relaxed tracking-[0.12em] xs:tracking-[0.15em] mb-2 xs:mb-3 sm:mb-5 lg:mb-6 font-["Geometos",sans-serif]'
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
                  className='text-[#A3A3A3] text-[10px] xs:text-xs sm:text-sm font-normal leading-relaxed tracking-tight'
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
