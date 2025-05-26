import React from 'react'

// Import social media icons - using the complete/proper icons
import linkedinIcon from '../assets/icons/social/linkedin.svg'  // Complete LinkedIn icon
import facebookIcon from '../assets/icons/social/facebook.svg'
import twitterIcon from '../assets/icons/social/twitter.svg'
import youtubeIcon from '../assets/icons/youtube.svg'
import instagramIcon from '../assets/icons/social/instagram.svg'  //
import glows from '../assets/images/glows.png'  //

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 rounded-t-[50px] w-full mt-auto relative px-5">

      <div className='absolute left-0 bottom-full w-full h-96'>
        <img src={glows} alt="glows" className='w-full h-full object-cover' />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-6 pb-4 max-w-[1440px] mx-auto gap-8 lg:gap-[273px] min-h-[111px]">
        <div className="flex flex-col justify-center gap-3 w-full lg:w-[474px] lg:h-[76px]">
          <h3 className="font-montserrat font-semibold text-xl sm:text-2xl leading-[1.219] text-white">
            Useful Links
          </h3>
          <nav className="text-nowrap flex flex-col sm:flex-row justify-start lg:justify-between items-center w-full gap-4 sm:gap-8 lg:gap-[86px]">
            <a 
              href="/" 
              className="font-montserrat font-medium text-base sm:text-lg leading-[1.4] tracking-[-0.0139em] capitalize text-white text-center hover:opacity-80 transition-opacity duration-300"
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Home
            </a>
            <a 
              href="/about-us" 
              className="font-montserrat font-medium text-base sm:text-lg leading-[1.4] tracking-[-0.0139em] capitalize text-white text-center hover:opacity-80 transition-opacity duration-300"
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              About Us
            </a>
            <a 
              href="#" 
              className="font-montserrat font-medium text-base sm:text-lg leading-[1.4] tracking-[-0.0139em] capitalize text-white text-center hover:opacity-80 transition-opacity duration-300"
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Services
            </a>
            <a 
              href="/contact-us" 
              className="font-montserrat font-medium text-base sm:text-lg leading-[1.4] tracking-[-0.0139em] capitalize text-white text-center hover:opacity-80 transition-opacity duration-300"
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Contact
            </a>
          </nav>
        </div>
        
        {/* Social Links Section - Exact Figma Specs */}
        <div className="flex flex-col justify-center gap-1.5 w-full lg:w-[341px]">
          <h3 className="font-inter font-semibold text-2xl leading-[1.21] text-white">
            Social Links
          </h3>
          <div className="flex items-center justify-start lg:justify-start gap-2 h-[41px]">
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-[34.72px] hover:-translate-y-0.5 hover:opacity-80 transition-all duration-300"
            >
              <img 
                src={linkedinIcon} 
                alt="LinkedIn" 
                className="w-7 h-7 object-contain brightness-0 invert"
              />
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-[34.72px] hover:-translate-y-0.5 hover:opacity-80 transition-all duration-300"
            >
              <img 
                src={facebookIcon} 
                alt="Facebook" 
                className="w-7 h-7 object-contain brightness-0 invert"
              />
            </a>
            <a 
              href="#" 
              aria-label="X"
              className="flex items-center justify-center w-10 h-[34.72px] hover:-translate-y-0.5 hover:opacity-80 transition-all duration-300"
            >
              <img 
                src={twitterIcon} 
                alt="X" 
                className="w-7 h-7 object-contain brightness-0 invert"
              />
            </a>
            <a 
              href="#" 
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-[34.72px] hover:-translate-y-0.5 hover:opacity-80 transition-all duration-300"
            >
              <img 
                src={youtubeIcon} 
                alt="YouTube" 
                className="w-8 h-6 object-contain brightness-0 invert"
              />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-[34.72px] hover:-translate-y-0.5 hover:opacity-80 transition-all duration-300"
            >
              <img 
                src={instagramIcon} 
                alt="Instagram" 
                className="w-8 h-8 object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer