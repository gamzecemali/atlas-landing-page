import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/twin.svg'
import atlasSpaceIcon from '../assets/images/atlas-space-icon.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to handle navigation and scroll to top
  const navigateAndScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-24 bg-black/75 z-[9999999]'>
        <div className='h-full atlas-container hidden lg:grid lg:grid-cols-3 lg:items-center'>
          {/* Logo - Left */}
          <div className='flex justify-start'>
            <Link to='/' className='' onClick={navigateAndScrollTop}>
              <img src={logo} alt="" />
            </Link>
          </div>
          
          {/* Navigation Links - Center */}
          <div className='flex flex-row items-center justify-center text-sm lg:text-base xl:text-lg 2xl:text-xl gap-3 lg:gap-4 xl:gap-6 2xl:gap-8'>
            <Link to='/' className='text-white border-2 border-transparent hover:border-b-white transition-all whitespace-nowrap' onClick={navigateAndScrollTop}>HOME</Link>
            <Link to='/about-us' className='text-white border-2 border-transparent hover:border-b-white transition-all whitespace-nowrap' onClick={navigateAndScrollTop}>ABOUT US</Link>
            <Link to='/services' className='text-white border-2 border-transparent hover:border-b-white transition-all whitespace-nowrap' onClick={navigateAndScrollTop}>SERVICES</Link>
            <Link to='/contact-us' className='text-white border-2 border-transparent hover:border-b-white transition-all whitespace-nowrap' onClick={navigateAndScrollTop}>CONTACT</Link>
          </div>

          {/* Atlas Space Button - Right */}
          <div className='flex justify-end'>
            <button className=' relative flex items-center gap-1 lg:gap-1.5 xl:gap-2 px-5 py-4 bg-[#111215] rounded border border-transparent hover:border-gradient-to-r hover:from-[#0AFFF0] hover:via-[#80B2EC] hover:via-[#C565D5] hover:to-[#F54FB3] transition-all duration-300 shadow-[0px_0px_20px_0px_rgba(79,207,233,0.5)] hover:shadow-[0px_0px_25px_0px_rgba(79,207,233,0.7)]'>
              <div className='absolute inset-0 rounded bg-gradient-to-r from-[#0AFFF0] via-[#80B2EC] via-[#C565D5] to-[#F54FB3] p-[1px] opacity-100'>
                <div className='h-full w-full rounded bg-[#111215]'></div>
              </div>
              <div className='relative flex items-center gap-1 lg:gap-1.5 xl:gap-2'>
                <img src={atlasSpaceIcon} alt="AtlasSpace" className='w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6' />
                <span className='text-white text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-semibold bg-gradient-to-r from-[#0AFFF0] via-[#80B2EC] via-[#C565D5] to-[#F54FB3] bg-clip-text text-transparent whitespace-nowrap'>
                  Atlas Space
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='h-full atlas-container flex flex-row items-center justify-between lg:hidden'>
          {/* Logo */}
          <Link to='/' className='' onClick={navigateAndScrollTop}>
            <img src={logo} alt="" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className='flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[10000000]'
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-24 left-0 w-full bg-black/95 z-[9999998] transition-all duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className='flex flex-col items-center py-8 space-y-6'>
          <Link 
            to='/' 
            className='text-white text-xl border-2 border-transparent hover:border-b-white transition-all py-2'
            onClick={() => {
              setIsMenuOpen(false);
              navigateAndScrollTop();
            }}
          >
            HOME
          </Link>
          <Link 
            to='/about-us' 
            className='text-white text-xl border-2 border-transparent hover:border-b-white transition-all py-2'
            onClick={() => {
              setIsMenuOpen(false);
              navigateAndScrollTop();
            }}
          >
            ABOUT US
          </Link>
          <Link 
            to='/services' 
            className='text-white text-xl border-2 border-transparent hover:border-b-white transition-all py-2'
            onClick={() => {
              setIsMenuOpen(false);
              navigateAndScrollTop();
            }}
          >
            SERVICES
          </Link>
          <Link 
            to='/contact-us' 
            className='text-white text-xl border-2 border-transparent hover:border-b-white transition-all py-2'
            onClick={() => {
              setIsMenuOpen(false);
              navigateAndScrollTop();
            }}
          >
            CONTACT
          </Link>
          
          {/* Mobile Atlas Space Button */}
          <button className=' relative flex items-center gap-2 px-5 py-3 bg-[#111215] rounded border border-transparent hover:border-gradient-to-r hover:from-[#0AFFF0] hover:via-[#80B2EC] hover:via-[#C565D5] hover:to-[#F54FB3] transition-all duration-300 shadow-[0px_0px_20px_0px_rgba(79,207,233,0.5)] hover:shadow-[0px_0px_25px_0px_rgba(79,207,233,0.7)] mt-4'>
            <div className='absolute inset-0 rounded bg-gradient-to-r from-[#0AFFF0] via-[#80B2EC] via-[#C565D5] to-[#F54FB3] p-[1px] opacity-100'>
              <div className='h-full w-full rounded bg-[#111215]'></div>
            </div>
            <div className='relative flex items-center gap-2'>
              <img src={atlasSpaceIcon} alt="AtlasSpace" className='w-6 h-6' />
              <span className='text-white text-sm font-semibold bg-gradient-to-r from-[#0AFFF0] via-[#80B2EC] via-[#C565D5] to-[#F54FB3] bg-clip-text text-transparent'>
                Atlas Space
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
