import React, { useState, useEffect, useRef } from 'react'

const Section9 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const popupRefs = useRef([]);
  const dotRefs = useRef([]);
  const lastScrollY = useRef(0);

  // Update viewport dimensions and detect device type on mount and resize
  useEffect(() => {
    const updateViewportInfo = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    // Initial setup
    updateViewportInfo();
    
    // Add resize listener
    window.addEventListener('resize', updateViewportInfo);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateViewportInfo);
    };
  }, []);

  // Close popup on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollY = window.scrollY;
      
      // If user scrolled more than 20px, close popup
      if (Math.abs(currentScrollY - lastScrollY.current) > 20 && activePopup !== null) {
        setActivePopup(null);
      }
      
      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Store initial scroll position
    lastScrollY.current = window.scrollY;
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activePopup]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If no popup is active, don't do anything
      if (activePopup === null) return;
      
      // Check if click is outside both the popup and the dot that triggered it
      const clickedOnPopup = popupRefs.current[activePopup] && popupRefs.current[activePopup].contains(event.target);
      const clickedOnDot = dotRefs.current[activePopup] && dotRefs.current[activePopup].contains(event.target);
      
      if (!clickedOnPopup && !clickedOnDot) {
        setActivePopup(null);
      }
    };
    
    // Add click event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup]);

  // Pulse dot component with animation and popup functionality
  const PulseDot = ({ className, delay = 0, index, popupContent }) => {
    const handleClick = () => {
      console.log(`Dot ${index} clicked!`);
      setActivePopup(activePopup === index ? null : index);
    };

    // Determine popup position based on dot position
    const getPopupPosition = () => {
      // Extract position from className
      const leftMatch = className.match(/left-\[(\d+)%\]/);
      
      if (leftMatch && leftMatch[1]) {
        const leftPercentage = parseInt(leftMatch[1], 10);
        
        // For dots on the left side of the screen, show popup to the right
        // For dots on the right side, show popup to the left
        if (leftPercentage < 40) {
          return "left-full translate-x-[10px]"; // Position to the right of the dot for far left dots
        } else if (leftPercentage < 50) {
          return "-left-[30px]"; // Slightly to the left for alignment
        } else {
          return "right-full -translate-x-[30px]"; // Position to the left of the dot
        }
      }
      
      return "-left-[30px]"; // Default position
    };

    return (
      <div className={`absolute ${className} z-30`}>
        <div 
          ref={el => dotRefs.current[index] = el}
          className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 cursor-pointer z-40"
          onClick={handleClick}
          style={{ margin: '-10px' }}
        >
          {/* Outer pulsing ring */}
          <div 
            className="absolute inset-0 rounded-full border border-cyan-400 bg-cyan-400/20 animate-ping cursor-pointer"
            style={{ animationDelay: `${delay}ms`, animationDuration: '2s' }}
            onClick={handleClick}
          ></div>
          {/* Inner dot */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-cyan-400 rounded-full animate-pulse cursor-pointer"
            style={{ animationDelay: `${delay}ms` }}
            onClick={handleClick}
          ></div>

          {/* Popup content - only show for desktop, not for tablet/mobile */}
          {activePopup === index && popupContent && !isTablet && !isMobile && (
            <div 
              ref={el => popupRefs.current[index] = el}
              className={`absolute z-50 ${getPopupPosition()} top-0 w-[220px] sm:w-[240px] md:w-[260px] max-w-[90vw]`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Main popup with only gray box */}
                <div className="relative">
                  {/* Custom shaped popup using clip-path for exact match */}
                  <div 
                    className="bg-[#222222] w-full" 
                    style={{
                      clipPath: 'polygon(20px 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 20px)'
                    }}
                  >
                    {/* Content inside */}
                    <div className="p-3 pt-4 pb-4 bg-[#222222]">
                      <h3 className="text-base font-semibold mb-2 text-white text-center tracking-tight">{popupContent.title}</h3>
                      <p className="text-xs text-gray-300 leading-relaxed text-center font-light tracking-tight">
                        {popupContent.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Modal popup for mobile and tablet
  const ModalPopup = () => {
    if (activePopup === null) return null;
    
    const content = popupContents[activePopup];
    
    // Determine modal size based on screen size
    const getModalSize = () => {
      if (viewportWidth < 375) {
        return "w-[240px] max-w-[95vw]";
      } else if (viewportWidth < 640) {
        return "w-[260px] max-w-[90vw]";
      } else {
        return "w-[280px] max-w-[85vw]";
      }
    };
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70" onClick={() => setActivePopup(null)}>
        <div 
          ref={el => popupRefs.current[activePopup] = el}
          className={`${getModalSize()}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            {/* Main popup with only gray box */}
            <div className="relative">
              {/* Custom shaped popup using clip-path for exact match */}
              <div 
                className="bg-[#222222] w-full" 
                style={{
                  clipPath: 'polygon(20px 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 20px)'
                }}
              >
                {/* Content inside */}
                <div className="p-3 pt-4 pb-4 bg-[#222222]">
                  <h3 className="text-base font-semibold mb-2 text-white text-center tracking-tight">{content.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed text-center font-light tracking-tight">
                    {content.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Popup content for each dot
  const popupContents = [
    {
      title: "Geographic Information Systems (GIS) Data",
      description: "Essential for mapping the geographical structure of the city. It includes 3D models of physical structures like buildings, roads, bridges, parks, and water bodies. These data ensure that the city's basic infrastructure is accurately represented in the digital environment."
    },
    {
      title: "Infrastructure Data",
      description: "Includes the mapping of distribution networks for essential services such as water, electricity, gas, and telecommunications. It provides information about the operational status, maintenance needs, and capacities of these systems, which is critical for managing and optimizing infrastructure."
    },
    {
      title: "Environmental Data",
      description: "Involves data on environmental conditions such as air quality, temperature, humidity, wind direction, and water quality. It also includes data for assessing the city's risks to natural disasters (earthquakes, floods, fires). These are crucial for sustainability and disaster management."
    },
    {
      title: "Energy Consumption Data",
      description: "Required to analyze energy consumption patterns within the city. Monitoring the energy usage of buildings, industries, and transportation systems allows for the development of more efficient energy management strategies."
    },
    {
      title: "Transportation Data",
      description: "Covers dynamic data on traffic density, public transportation networks (buses, trains, metros), road capacities, pedestrian pathways, and bike lanes. These data help optimize traffic flow and improve public transportation."
    },
    {
      title: "Sensor and IoT Data",
      description: "Data collected from smart sensors and Internet of Things (IoT) devices within the city. For example, real-time data from smart street lights, traffic lights, weather stations, and waste containers continuously update the city's digital twin."
    },
    {
      title: "Demographic Data",
      description: "Includes socioeconomic data on the city's residents, such as age, gender, income levels, and education. This data assists in making more accurate and equitable decisions in urban planning and service distribution."
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
        <h2 className="font-geometos text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent tracking-wide sm:tracking-wider md:tracking-[0.15em] leading-tight">
          OUR WORKING PROCESS
        </h2>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-white text-center leading-relaxed tracking-tight drop-shadow-lg max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
          A digital twin is a virtual replica of a physical object, system, or process that continuously updates in real-time using data to optimize performance and predict future outcomes. When creating a digital twin we use the following data.
        </p>
      </div>

      {/* Background Image with Animated Dots */}
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('/section9-bg.png')`,
            transform: 'scaleX(-1)',
            backgroundPosition: 'center 60%' // Show more of the lower part of the image
          }}
        ></div>

        {/* Desktop/Tablet Dots Layout - visible on md screens and up */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          {/* Dots positioned exactly on the circular areas in the image */}
          <PulseDot className="top-[49%] left-[37%]" delay={0} index={0} popupContent={popupContents[0]} /> {/* Middle left circle */}
          <PulseDot className="top-[33%] left-[54%]" delay={300} index={1} popupContent={popupContents[1]} /> {/* Middle top circle */}
          <PulseDot className="top-[75%] left-[71%]" delay={600} index={2} popupContent={popupContents[2]} /> {/* Middle right circle */}
          <PulseDot className="top-[68%] left-[43%] z-50" delay={900} index={3} popupContent={popupContents[3]} /> {/* Center circle - Energy Consumption */}
          <PulseDot className="top-[39%] left-[74%]" delay={1200} index={4} popupContent={popupContents[4]} /> {/* Bottom right circle */}
          <PulseDot className="top-[63%] left-[26%] z-50" delay={1500} index={5} popupContent={popupContents[5]} /> {/* Bottom left circle */}
          <PulseDot className="top-[52%] left-[58%]" delay={1800} index={6} popupContent={popupContents[6]} /> {/* Bottom center circle */}
        </div>

        {/* Mobile Dots Layout - showing all 7 dots on smaller screens */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          <PulseDot className="top-[49%] left-[37%]" delay={0} index={0} popupContent={popupContents[0]} /> {/* Middle left circle */}
          <PulseDot className="top-[37%] left-[53%]" delay={300} index={1} popupContent={popupContents[1]} /> {/* Middle top circle */}
          <PulseDot className="top-[73%] left-[70%]" delay={600} index={2} popupContent={popupContents[2]} /> {/* Middle right circle */}
          <PulseDot className="top-[66%] left-[43%] z-50" delay={900} index={3} popupContent={popupContents[3]} /> {/* Center circle - Energy Consumption */}
          <PulseDot className="top-[42%] left-[74%]" delay={1200} index={4} popupContent={popupContents[4]} /> {/* Bottom right circle */}
          <PulseDot className="top-[62%] left-[25%] z-50" delay={1500} index={5} popupContent={popupContents[5]} /> {/* Bottom left circle */}
          <PulseDot className="top-[52%] left-[58%]" delay={1800} index={6} popupContent={popupContents[6]} /> {/* Bottom center circle */}
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[286px] bg-gradient-to-t from-black via-black/75 to-transparent"></div>
      </div>
      
      {/* Modal popup for mobile and tablet */}
      {(isTablet || isMobile) && activePopup !== null && <ModalPopup />}
    </div>
  )
}

export default Section9
