import React, { useState } from 'react'

const Section21 = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const services = [
    {
      id: '001',
      title: 'Digital Infrastructure',
      description: 'Building robust digital foundations for modern businesses',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '002', 
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights',
      content: 'Advanced analytics solutions that turn complex data into clear, actionable insights. Our comprehensive approach includes data visualization, predictive modeling, and real-time reporting to help you make informed decisions that drive business growth.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '003',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      content: 'Comprehensive cloud migration and infrastructure management services. We help businesses transition to cloud platforms with minimal downtime while ensuring security, scalability, and cost-effectiveness throughout the process.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '004',
      title: 'AI Integration',
      description: 'Intelligent automation and machine learning solutions',
      content: 'Cutting-edge artificial intelligence and machine learning solutions that automate processes, enhance decision-making, and create intelligent systems that adapt and learn from your business operations.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '005',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets',
      content: 'Multi-layered cybersecurity solutions that protect your digital infrastructure from evolving threats. Our approach includes threat detection, incident response, and proactive security measures to safeguard your business.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '006',
      title: 'Digital Transformation',
      description: 'End-to-end modernization of business processes',
      content: 'Complete digital transformation services that modernize your business processes, improve operational efficiency, and create new opportunities for growth through innovative technology solutions.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 w-full max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-5">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full">
        <div className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[504px] h-[60px] sm:h-[75px] md:h-[90px] lg:h-[103px] flex items-center justify-center">
          {/* Vector Elements */}
          <div className="absolute top-0 left-0 w-[30px] sm:w-[40px] md:w-[46px] lg:w-[52px] h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18.54px] border-t border-l border-white shadow-[0_0_60px_0_rgba(0,0,0,1)]"></div>
          <div className="absolute top-0 right-0 w-[30px] sm:w-[40px] md:w-[46px] lg:w-[52px] h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18.54px] border-t border-r border-white shadow-[0_0_60px_0_rgba(0,0,0,1)]"></div>
          <div className="absolute bottom-0 left-0 w-[30px] sm:w-[40px] md:w-[46px] lg:w-[52px] h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18.54px] border-b border-l border-white shadow-[0_0_60px_0_rgba(0,0,0,1)]"></div>
          <div className="absolute bottom-0 right-0 w-[30px] sm:w-[40px] md:w-[46px] lg:w-[52px] h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18.54px] border-b border-r border-white shadow-[0_0_60px_0_rgba(0,0,0,1)]"></div>
          
          <h2 className="font-geometos font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-[0.15em] text-center bg-gradient-to-br from-white to-[#DDDDDD] bg-clip-text text-transparent m-0 relative z-10">
            WHAT WE DO
          </h2>
        </div>
        
        <p className="font-inter font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-center text-[#E8E8E8] drop-shadow-[0_5.23px_5.23px_rgba(0,0,0,0.25)] m-0 max-w-[280px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]">
          Geospatial digital twins provide unparalleled context and high-resolution data integration for better business decisions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 pr-3 w-full min-h-[100px] sm:min-h-[120px] border border-transparent bg-white/[0.02] backdrop-blur-[10px] transition-all duration-300 cursor-pointer overflow-hidden hover:bg-white/[0.05] hover:-translate-y-0.5 ${
              expandedCard === service.id 
                ? 'bg-white/[0.08] border-gradient-expanded' 
                : 'border-gradient-default hover:border-gradient-hover'
            }`}
            onClick={() => toggleCard(service.id)}
            style={{
              borderImage: expandedCard === service.id 
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 100%) 1'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.3) 100%) 1'
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-[120px] w-full py-4 sm:py-0 gap-4 sm:gap-0">
              <div className="flex flex-col gap-3 sm:gap-6 w-full sm:w-[568px] md:flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#18FEFE] rounded-sm"></div>
                  </div>
                  <span className="font-roboto font-normal text-sm sm:text-base leading-tight tracking-[-0.005em] text-white">
                    {service.id}
                  </span>
                </div>
                <h3 className="font-geometos font-normal text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight tracking-[-0.005em] text-white m-0">
                  {service.title}
                </h3>
              </div>
              
              <div className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 self-end sm:self-center ${
                expandedCard === service.id 
                  ? 'rotate-180 text-[#18FEFE]' 
                  : 'text-[#666666] hover:translate-x-[3px] hover:-translate-y-[3px] hover:text-[#888888]'
              }`}>
                <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                  <path d="M39.6888 2.643L41.8643 2.643L41.8612 0.470566L39.6888 0.467491L39.6888 2.643ZM1.27934 37.9797C0.871865 38.3871 0.642947 38.9398 0.642948 39.516C0.642947 40.0923 0.871865 40.6449 1.27934 41.0524C1.68681 41.4599 2.23946 41.6888 2.81571 41.6888C3.39197 41.6888 3.94462 41.4599 4.35209 41.0524L1.27934 37.9797ZM41.8643 27.225L41.8643 2.643L37.5132 2.643L37.5132 27.225H41.8643ZM39.6888 0.467491L15.1067 0.467491L15.1067 4.81851L39.6888 4.81851L39.6888 0.467491ZM38.1524 1.10662L1.27934 37.9797L4.35209 41.0524L41.2251 4.17938L38.1524 1.10662Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            
            {expandedCard === service.id && (
              <div className="flex flex-col gap-4 sm:gap-6 pb-6 sm:pb-10 animate-[expandContent_0.3s_ease-out]">
                <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[451px] rounded-lg overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="font-inter font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-[#E8E8E8] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] m-0 text-left">
                  {service.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes expandContent {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .border-gradient-default {
          border-image: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.2) 50%, 
            rgba(255, 255, 255, 0.3) 100%) 1;
        }

        .border-gradient-hover {
          border-image: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.2) 0%, 
            rgba(255, 255, 255, 0.3) 50%, 
            rgba(255, 255, 255, 0.4) 100%) 1;
        }

        .border-gradient-expanded {
          border-image: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.3) 0%, 
            rgba(255, 255, 255, 0.4) 50%, 
            rgba(255, 255, 255, 0.5) 100%) 1;
        }
      `}</style>
    </div>
  )
}

export default Section21
