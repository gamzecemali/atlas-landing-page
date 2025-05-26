import React, { useState, useEffect } from 'react'
import backgroundImage from '../../assets/images/about-us-bg.png'

const Section1 = () => {
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

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Calculate transform values for different layers based on mouse position
  const getLayerTransform = (intensity = 1) => {
    const moveX = mousePosition.x * intensity * 25; // Increased multiplier for stronger effect
    const moveY = mousePosition.y * intensity * 25;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  // Calculate rotation and scale effects for enhanced animation
  const getEnhancedTransform = (intensity = 1, rotationIntensity = 1) => {
    const moveX = mousePosition.x * intensity * 25;
    const moveY = mousePosition.y * intensity * 25;
    const rotation = mousePosition.x * rotationIntensity * 2; // Subtle rotation
    const scale = 1 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.02; // Slight scale effect
    return `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg) scale(${scale})`;
  };

  return (
    <div className='relative h-screen w-full bg-black overflow-hidden'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <img 
          src={backgroundImage} 
          className='w-full h-full object-cover' 
          alt="About Us Background"
        />
      </div>

      {/* Layered About US Text Effects with Mouse Follow Animation */}
      <div className='absolute inset-0 flex items-center justify-center'>
        {/* Layer 7 - White text */}
        <div 
          className='absolute text-white text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none transition-all duration-75 ease-out'
          style={{ transform: getEnhancedTransform(1.0, 0.5) }}
        >
          About US
        </div>
        
        {/* Layer 6 - Cyan gradient */}
        <div 
          className='absolute text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none bg-gradient-to-br from-[#4FCFE9] to-transparent bg-clip-text text-transparent transition-all duration-75 ease-out'
          style={{ transform: getEnhancedTransform(1.5, 1.0) }}
        >
          About US
        </div>
        
        {/* Layer 5 - White text */}
        <div 
          className='absolute text-white text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none transition-all duration-75 ease-out'
          style={{ transform: getEnhancedTransform(0.8, 0.3) }}
        >
          About US
        </div>
        
        {/* Layer 4 - Cyan gradient */}
        <div 
          className='absolute text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none bg-gradient-to-br from-[#4FCFE9] to-transparent bg-clip-text text-transparent transition-all duration-75 ease-out'
          style={{ transform: getEnhancedTransform(1.2, 0.8) }}
        >
          About US
        </div>
        
        {/* Layer 3 - White text */}
        <div 
          className='absolute text-white text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none transition-all duration-75 ease-out'
          style={{ transform: getEnhancedTransform(0.6, 0.2) }}
        >
          About US
        </div>
        
        {/* Layer 2 - Glass effect gradient */}
        <div 
          className='absolute text-[100px] font-normal leading-none text-center font-["Geometos",sans-serif] select-none bg-gradient-to-br from-white/10 via-white/20 to-white/30 bg-clip-text text-transparent transition-all duration-75 ease-out'
          style={{ transform: getEnhancedTransform(1.8, 1.2) }}
        >
          About US
        </div>
      </div>

      {/* Gradient Overlay */}
      <div 
        className='absolute bottom-0 left-0 w-full h-[177px] pointer-events-none'
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 92.5%)'
        }}
      />

    
    </div>
  )
}

export default Section1
