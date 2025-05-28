import React, { useState, useEffect } from 'react'
import './Section7.css'

// Import client logos
import awsLogo from '../../assets/clients/aws.png'
import bbhLogo from '../../assets/clients/bbh.png'
import denizbankLogo from '../../assets/clients/denizbank.png'
import oculusLogo from '../../assets/clients/oculus.png'
import pepsiLogo from '../../assets/clients/pepsi.png'
import polygonLogo from '../../assets/clients/polygon.png'
import rpmLogo from '../../assets/clients/rpm.png'
import toggLogo from '../../assets/clients/togg.png'
import unityLogo from '../../assets/clients/unity.png'
import vodafoneLogo from '../../assets/clients/vodafone.png'

// SVG Frame Component - Enhanced Figma design with vibrant turquoise effects and shadows
const ClientFrame = ({ index }) => (
  <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full transition-all duration-300 opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.8)] hover:filter hover:brightness-110" style={{backgroundColor: 'transparent', background: 'transparent'}}>
    <g clipPath={`url(#clip0_14201_65_${index})`} filter={`url(#filter0_d_14201_65_${index})`} style={{backgroundColor: 'transparent', background: 'transparent'}}>
      {/* Top Left Corner */}
      <mask id={`path-1-inside-1_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.7353 0V6.12198H5.87239V12.2143H0V0H11.7353Z"/>
      </mask>
             <path fillRule="evenodd" clipRule="evenodd" d="M11.7353 0V6.12198H5.87239V12.2143H0V0H11.7353Z" fill="#00D4FF" fillOpacity="0.7"/>
      <g clipPath={`url(#paint0_angular_14201_65_clip_path_${index})`} mask={`url(#path-1-inside-1_14201_65_${index})`}>
        <g transform="matrix(-0.00720588 -0.00717857 0.00689706 -0.0075 5.86765 6.10714)">
          <foreignObject x="-970.746" y="-970.746" width="1941.49" height="1941.49">
            <div style={{background: 'conic-gradient(from 90deg,rgba(76, 228, 255, 1) 0deg,rgba(0, 211, 255, 0.5) 89.9458deg,rgba(0, 211, 255, 0.5) 194.905deg,rgba(76, 228, 255, 1) 360deg)', height: '100%', width: '100%', opacity: 0.6}}></div>
          </foreignObject>
        </g>
      </g>
      <path d="M11.7353 0H12.7353V-1H11.7353V0ZM11.7353 6.12198V7.12198H12.7353V6.12198H11.7353ZM5.87239 6.12198V5.12198H4.87239V6.12198H5.87239ZM5.87239 12.2143V13.2143H6.87239V12.2143H5.87239ZM0 12.2143H-1V13.2143H0V12.2143ZM0 0V-1H-1V0H0ZM10.7353 0V6.12198H12.7353V0H10.7353ZM11.7353 5.12198H5.87239V7.12198H11.7353V5.12198ZM4.87239 6.12198V12.2143H6.87239V6.12198H4.87239ZM5.87239 11.2143H0V13.2143H5.87239V11.2143ZM1 12.2143V0H-1V12.2143H1ZM0 1H11.7353V-1H0V1Z" mask={`url(#path-1-inside-1_14201_65_${index})`}/>

      {/* Top Right Corner */}
      <mask id={`path-3-inside-2_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M102.265 0V6.12198H108.128V12.2143H114V0H102.265Z"/>
      </mask>
             <path fillRule="evenodd" clipRule="evenodd" d="M102.265 0V6.12198H108.128V12.2143H114V0H102.265Z" fill="#00D4FF" fillOpacity="0.7"/>
      <g clipPath={`url(#paint1_angular_14201_65_clip_path_${index})`} mask={`url(#path-3-inside-2_14201_65_${index})`}>
        <g transform="matrix(0.00720588 -0.00717857 -0.00689706 -0.0075 108.132 6.10714)">
          <foreignObject x="-970.746" y="-970.746" width="1941.49" height="1941.49">
            <div style={{background: 'conic-gradient(from 90deg,rgba(76, 228, 255, 1) 0deg,rgba(0, 211, 255, 0.5) 89.9458deg,rgba(0, 211, 255, 0.5) 194.905deg,rgba(76, 228, 255, 1) 360deg)', height: '100%', width: '100%', opacity: 0.6}}></div>
          </foreignObject>
        </g>
      </g>

      {/* Bottom Right Corner */}
      <mask id={`path-5-inside-3_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M114 99.75H108.132V106.881H102.265V114H114V99.75Z"/>
      </mask>
             <path fillRule="evenodd" clipRule="evenodd" d="M114 99.75H108.132V106.881H102.265V114H114V99.75Z" fill="#00D4FF" fillOpacity="0.7"/>
      <g clipPath={`url(#paint2_angular_14201_65_clip_path_${index})`} mask={`url(#path-5-inside-3_14201_65_${index})`}>
        <g transform="matrix(0.00720588 -0.008375 -0.00689706 -0.00875 108.132 106.875)">
          <foreignObject x="-961.231" y="-961.231" width="1922.46" height="1922.46">
            <div style={{background: 'conic-gradient(from 90deg,rgba(76, 228, 255, 1) 0deg,rgba(0, 211, 255, 0.5) 89.9458deg,rgba(0, 211, 255, 0.5) 194.905deg,rgba(76, 228, 255, 1) 360deg)', height: '100%', width: '100%', opacity: 0.6}}></div>
          </foreignObject>
        </g>
      </g>

      {/* Bottom Left Corner */}
      <mask id={`path-7-inside-4_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 99.75H5.86768V106.881H11.7353V114H0V99.75Z"/>
      </mask>
             <path fillRule="evenodd" clipRule="evenodd" d="M0 99.75H5.86768V106.881H11.7353V114H0V99.75Z" fill="#00D4FF" fillOpacity="0.7"/>
      <g clipPath={`url(#paint3_angular_14201_65_clip_path_${index})`} mask={`url(#path-7-inside-4_14201_65_${index})`}>
        <g transform="matrix(-0.00720588 -0.008375 0.00689706 -0.00875 5.86765 106.875)">
          <foreignObject x="-961.231" y="-961.231" width="1922.46" height="1922.46">
            <div style={{background: 'conic-gradient(from 90deg,rgba(76, 228, 255, 1) 0deg,rgba(0, 211, 255, 0.5) 89.9458deg,rgba(0, 211, 255, 0.5) 194.905deg,rgba(76, 228, 255, 1) 360deg)', height: '100%', width: '100%', opacity: 0.6}}></div>
          </foreignObject>
        </g>
      </g>

      {/* Top Border */}
      <mask id={`path-9-inside-5_14201_65_${index}`} fill="white">
        <path d="M96.0247 0H18.4414V3.8H96.0247V0Z"/>
      </mask>
             <path d="M96.0247 0H18.4414V3.8H96.0247V0Z" fill="white" fillOpacity="0.6"/>
       <path d="M96.0247 0H18.4414V3.8H96.0247V0Z" fill="#4CE4FF" fillOpacity="0.3"/>

      {/* Left Border */}
      <mask id={`path-11-inside-6_14201_65_${index}`} fill="white">
        <path d="M4 20.3569H0V91.6069H4V20.3569Z"/>
      </mask>
             <path d="M4 20.3569H0V91.6069H4V20.3569Z" fill="white" fillOpacity="0.6"/>
       <path d="M4 20.3569H0V91.6069H4V20.3569Z" fill="#4CE4FF" fillOpacity="0.3"/>

      {/* Right Border */}
      <mask id={`path-13-inside-7_14201_65_${index}`} fill="white">
        <path d="M114 20.3569H110V91.6069H114V20.3569Z"/>
      </mask>
             <path d="M114 20.3569H110V91.6069H114V20.3569Z" fill="white" fillOpacity="0.6"/>
       <path d="M114 20.3569H110V91.6069H114V20.3569Z" fill="#4CE4FF" fillOpacity="0.3"/>

      {/* Bottom Border */}
      <mask id={`path-15-inside-8_14201_65_${index}`} fill="white">
        <path d="M96.0247 110H18.4414V114H96.0247V110Z"/>
      </mask>
             <path d="M96.0247 110H18.4414V114H96.0247V110Z" fill="white" fillOpacity="0.6"/>
       <path d="M96.0247 110H18.4414V114H96.0247V110Z" fill="#4CE4FF" fillOpacity="0.3"/>
    </g>

    <defs>
      <filter id={`filter0_d_14201_65_${index}`} x="-8" y="0" width="130" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        
        {/* Main drop shadow */}
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        
        {/* Turquoise glow effect */}
        <feOffset dy="0"/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.831 0 0 0 0 1 0 0 0 0.6 0"/>
        <feBlend mode="screen" in2="effect1_dropShadow" result="effect2_turquoiseGlow"/>
        
        {/* Bright cyan edge glow */}
        <feOffset dy="0"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298 0 0 0 0 0.894 0 0 0 0 1 0 0 0 0.8 0"/>
        <feBlend mode="screen" in2="effect2_turquoiseGlow" result="effect3_cyanEdge"/>
        
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_cyanEdge" result="shape"/>
      </filter>
      
      <clipPath id={`paint0_angular_14201_65_clip_path_${index}`}>
        <path d="M11.7353 0H12.7353V-1H11.7353V0ZM11.7353 6.12198V7.12198H12.7353V6.12198H11.7353ZM5.87239 6.12198V5.12198H4.87239V6.12198H5.87239ZM5.87239 12.2143V13.2143H6.87239V12.2143H5.87239ZM0 12.2143H-1V13.2143H0V12.2143ZM0 0V-1H-1V0H0ZM10.7353 0V6.12198H12.7353V0H10.7353ZM11.7353 5.12198H5.87239V7.12198H11.7353V5.12198ZM4.87239 6.12198V12.2143H6.87239V6.12198H4.87239ZM5.87239 11.2143H0V13.2143H5.87239V11.2143ZM1 12.2143V0H-1V12.2143H1ZM0 1H11.7353V-1H0V1Z" mask={`url(#path-1-inside-1_14201_65_${index})`}/>
      </clipPath>
      
      <clipPath id={`paint1_angular_14201_65_clip_path_${index}`}>
        <path d="M102.265 0H101.265V-1H102.265V0ZM102.265 6.12198V7.12198H101.265V6.12198H102.265ZM108.128 6.12198V5.12198H109.128V6.12198H108.128ZM108.128 12.2143V13.2143H107.128V12.2143H108.128ZM114 12.2143H115V13.2143H114V12.2143ZM114 0V-1H115V0H114ZM103.265 0V6.12198H101.265V0H103.265ZM102.265 5.12198H108.128V7.12198H102.265V5.12198ZM109.128 6.12198V12.2143H107.128V6.12198H109.128ZM108.128 11.2143H114V13.2143H108.128V11.2143ZM113 12.2143V0H115V12.2143H113ZM114 1H102.265V-1H114V1Z" mask={`url(#path-3-inside-2_14201_65_${index})`}/>
      </clipPath>
      
      <clipPath id={`paint2_angular_14201_65_clip_path_${index}`}>
        <path d="M114 99.75V98.75H115V99.75H114ZM108.132 99.75H107.132V98.75H108.132V99.75ZM108.132 106.881H109.132V107.881H108.132V106.881ZM102.265 106.881H101.265V105.881H102.265V106.881ZM102.265 114V115H101.265V114H102.265ZM114 114H115V115H114V114ZM114 100.75H108.132V98.75H114V100.75ZM109.132 99.75V106.881H107.132V99.75H109.132ZM108.132 107.881H102.265V105.881H108.132V107.881ZM103.265 106.881V114H101.265V106.881H103.265ZM102.265 113H114V115H102.265V113ZM113 114V99.75H115V114H113Z" mask={`url(#path-5-inside-3_14201_65_${index})`}/>
      </clipPath>
      
      <clipPath id={`paint3_angular_14201_65_clip_path_${index}`}>
        <path d="M0 99.75V98.75H-1V99.75H0ZM5.86768 99.75H6.86768V98.75H5.86768V99.75ZM5.86768 106.881H4.86768V107.881H5.86768V106.881ZM11.7353 106.881H12.7353V105.881H11.7353V106.881ZM11.7353 114V115H12.7353V114H11.7353ZM0 114H-1V115H0V114ZM0 100.75H5.86768V98.75H0V100.75ZM4.86768 99.75V106.881H6.86768V99.75H4.86768ZM5.86768 107.881H11.7353V105.881H5.86768V107.881ZM10.7353 106.881V114H12.7353V106.881H10.7353ZM11.7353 113H0V115H11.7353V113ZM1 114V99.75H-1V114H1Z" mask={`url(#path-7-inside-4_14201_65_${index})`}/>
      </clipPath>
      
      <clipPath id={`clip0_14201_65_${index}`}>
        <rect width="114" height="114" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

// Animated Client Card Component
const AnimatedClientCard = ({ clientPair, index, animationDelay }) => {
  const [currentLogo, setCurrentLogo] = useState(0) // 0 for primary, 1 for secondary

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo(prev => prev === 0 ? 1 : 0)
    }, 3000 + (index * 200)) // Stagger the animations

    return () => clearInterval(interval)
  }, [index])

  return (
    <div 
      className="client-card-container relative w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[114px] md:h-[114px] flex justify-center items-center opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease_forwards] hover:-translate-y-1"
      style={{ 
        animationDelay: animationDelay, 
        backgroundColor: 'transparent', 
        background: 'transparent',
        backgroundImage: 'none'
      }}
    >
      <ClientFrame index={`card_${index}`} />
      <div 
        className="client-logo-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex justify-center items-center z-[2] transition-all duration-300"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.02) 70%, transparent 100%)',
          backdropFilter: 'blur(1px)'
        }}
      >
        <div className="relative w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 mx-auto">
          <img 
            src={clientPair.primary.logo} 
            alt={clientPair.primary.name} 
            className={`absolute inset-0 w-full h-full object-contain object-center brightness-[1.2] contrast-[1.1] transition-all duration-[600ms] hover:brightness-[1.4] hover:contrast-[1.2] hover:scale-110 ${
              currentLogo === 0 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-5'
            } ${clientPair.primary.name === 'Oculus' ? 'scale-125' : ''}`}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
          <img 
            src={clientPair.secondary.logo} 
            alt={clientPair.secondary.name} 
            className={`absolute inset-0 w-full h-full object-contain object-center brightness-[1.2] contrast-[1.1] transition-all duration-[600ms] hover:brightness-[1.4] hover:contrast-[1.2] hover:scale-110 ${
              currentLogo === 1 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-5'
            } ${clientPair.secondary.name === 'Oculus' ? 'scale-125' : ''}`}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

const Section7 = () => {
  // Define client pairs for animation (each position alternates between two different logos)
  const clientsRow1 = [
    { primary: { name: 'AWS', logo: awsLogo }, secondary: { name: 'Polygon', logo: polygonLogo } },
    { primary: { name: 'BBH', logo: bbhLogo }, secondary: { name: 'Unity', logo: unityLogo } },
    { primary: { name: 'Denizbank', logo: denizbankLogo }, secondary: { name: 'Togg', logo: toggLogo } },
    { primary: { name: 'Oculus', logo: oculusLogo }, secondary: { name: 'RPM', logo: rpmLogo } },
    { primary: { name: 'Pepsi', logo: pepsiLogo }, secondary: { name: 'Vodafone', logo: vodafoneLogo } }
  ]

  const clientsRow2 = [
    { primary: { name: 'Polygon', logo: polygonLogo }, secondary: { name: 'AWS', logo: awsLogo } },
    { primary: { name: 'RPM', logo: rpmLogo }, secondary: { name: 'Denizbank', logo: denizbankLogo } },
    { primary: { name: 'Togg', logo: toggLogo }, secondary: { name: 'Pepsi', logo: pepsiLogo } },
    { primary: { name: 'Unity', logo: unityLogo }, secondary: { name: 'BBH', logo: bbhLogo } },
    { primary: { name: 'Vodafone', logo: vodafoneLogo }, secondary: { name: 'Oculus', logo: oculusLogo } }
  ]

  return (
    <div className="section7-wrapper" style={{backgroundColor: '#000000', background: '#000000'}}>
      <section className="section7-container-main w-full py-10 sm:py-14 md:py-16 lg:py-20 flex justify-center items-center" style={{backgroundColor: '#000000', background: '#000000'}}>
        <div className="max-w-6xl w-full px-4 sm:px-5 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16" style={{backgroundColor: '#000000', background: '#000000'}}>
          {/* Header */}
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-wide sm:tracking-wider md:tracking-[0.15em] text-center m-0 bg-gradient-to-br from-white via-white to-gray-300 bg-clip-text text-transparent">
              OUR CLIENTS & PARTNERS
            </h2>
            <p className="font-['Inter'] font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-[1.21] text-center text-gray-300 m-0">
              We work with 50+ enterprises.<br />
              Here are some of them.
            </p>
          </div>

          {/* Client Logos */}
          <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-9 w-full" style={{backgroundColor: '#000000', background: '#000000'}}>
            {/* First Row */}
            <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full" style={{backgroundColor: '#000000', background: '#000000'}}>
              {clientsRow1.map((clientPair, index) => (
                <AnimatedClientCard 
                  key={`row1_${index}`}
                  clientPair={clientPair}
                  index={index}
                  animationDelay={`${index * 0.1}s`}
                />
              ))}
            </div>

            {/* Second Row */}
            <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full" style={{backgroundColor: '#000000', background: '#000000'}}>
              {clientsRow2.map((clientPair, index) => (
                <AnimatedClientCard 
                  key={`row2_${index}`}
                  clientPair={clientPair}
                  index={index}
                  animationDelay={`${(index * 0.1) + 0.25}s`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section7
