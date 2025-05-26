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
  <svg width="100%" height="100%" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full transition-all duration-300 opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.8)] hover:filter hover:brightness-110">
    <g clipPath={`url(#clip0_14201_65_${index})`} filter={`url(#filter0_d_14201_65_${index})`}>
      {/* Top Left Corner */}
      <mask id={`path-1-inside-1_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.7353 0V6.12198H5.87239V12.2143H0V0H11.7353Z"/>
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.7353 0V6.12198H5.87239V12.2143H0V0H11.7353Z" fill="#00D4FF" fillOpacity="0.7"/>
      
      {/* Top Right Corner */}
      <mask id={`path-3-inside-2_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M102.265 0V6.12198H108.128V12.2143H114V0H102.265Z"/>
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M102.265 0V6.12198H108.128V12.2143H114V0H102.265Z" fill="#00D4FF" fillOpacity="0.7"/>
      
      {/* Bottom Right Corner */}
      <mask id={`path-5-inside-3_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M114 99.75H108.132V106.881H102.265V114H114V99.75Z"/>
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M114 99.75H108.132V106.881H102.265V114H114V99.75Z" fill="#00D4FF" fillOpacity="0.7"/>
      
      {/* Bottom Left Corner */}
      <mask id={`path-7-inside-4_14201_65_${index}`} fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 99.75H5.86768V106.881H11.7353V114H0V99.75Z"/>
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 99.75H5.86768V106.881H11.7353V114H0V99.75Z" fill="#00D4FF" fillOpacity="0.7"/>

      {/* Top Border */}
      <path d="M96.0247 0H18.4414V3.8H96.0247V0Z" fill="white" fillOpacity="0.6"/>
      <path d="M96.0247 0H18.4414V3.8H96.0247V0Z" fill="#4CE4FF" fillOpacity="0.3"/>

      {/* Left Border */}
      <path d="M4 20.3569H0V91.6069H4V20.3569Z" fill="white" fillOpacity="0.6"/>
      <path d="M4 20.3569H0V91.6069H4V20.3569Z" fill="#4CE4FF" fillOpacity="0.3"/>

      {/* Right Border */}
      <path d="M114 20.3569H110V91.6069H114V20.3569Z" fill="white" fillOpacity="0.6"/>
      <path d="M114 20.3569H110V91.6069H114V20.3569Z" fill="#4CE4FF" fillOpacity="0.3"/>

      {/* Bottom Border */}
      <path d="M96.0247 110H18.4414V114H96.0247V110Z" fill="white" fillOpacity="0.6"/>
      <path d="M96.0247 110H18.4414V114H96.0247V110Z" fill="#4CE4FF" fillOpacity="0.3"/>
    </g>

    <defs>
      <filter id={`filter0_d_14201_65_${index}`} x="-8" y="0" width="130" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.831 0 0 0 0 1 0 0 0 0.6 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="shape"/>
      </filter>
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
      className="relative w-[100px] h-[100px] sm:w-[114px] sm:h-[114px] flex justify-center items-center bg-transparent cursor-pointer transition-all duration-300 opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease_forwards] hover:-translate-y-1"
      style={{ animationDelay: animationDelay }}
    >
      <ClientFrame index={`card_${index}`} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 flex justify-center items-center z-[2] transition-all duration-300 bg-gradient-radial from-white/15 via-white/8 to-white/2 backdrop-blur-sm hover:scale-105 hover:bg-gradient-radial hover:from-white/25 hover:via-white/15 hover:to-white/5 ">
        <div className="relative w-14 sm:w-16 h-14 sm:h-16 mx-auto">
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
    <section className="w-full py-12 sm:py-20 bg-black flex justify-center items-center">
      <div className="max-w-6xl w-full px-4 sm:px-5 flex flex-col items-center gap-10 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="font-normal text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[0.15em] text-center m-0 bg-gradient-to-br from-white via-white to-gray-300 bg-clip-text text-transparent">
            OUR CLIENTS & PARTNERS
          </h2>
          <p className="font-['Inter'] font-semibold text-base sm:text-lg leading-[1.21] text-center text-gray-300 m-0">
            We work with 50+ enterprises.<br />
            Here are some of them.
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-col items-center gap-6 sm:gap-9 w-full">
          {/* First Row */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 w-full flex-wrap">
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
          <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 w-full flex-wrap">
            {clientsRow2.map((clientPair, index) => (
              <AnimatedClientCard 
                key={`row2_${index}`}
                clientPair={clientPair}
                index={index}
                animationDelay={`${(index + 5) * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section7
