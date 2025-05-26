import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './SliderComp.css'

const SliderComp = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Sample slide data with actual Figma images
  const slides = [
    {
      id: 1,
      image: '/images/slider/slide-1.png',
      title: 'Digital Infrastructure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus.'
    },
    {
      id: 2,
      image: '/images/slider/slide-2.png',
      title: 'Cloud Solutions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Innovative cloud infrastructure for modern businesses.'
    },
    {
      id: 3,
      image: '/images/slider/slide-background.png',
      title: 'Data Analytics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Advanced analytics for data-driven decisions.'
    },
    {
      id: 4,
      image: '/images/slider/slide-1.png',
      title: 'Security Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Comprehensive security solutions for your business.'
    },
    {
      id: 5,
      image: '/images/slider/slide-2.png',
      title: 'AI Solutions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Artificial intelligence for tomorrow\'s challenges.'
    },
    {
      id: 6,
      image: '/images/slider/slide-background.png',
      title: 'Mobile Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus. Mobile-first development for modern applications.'
    }
  ]

  return (
    <div className="slider-container">
      {/* Main Slider Frame */}
      <div className="slider-frame">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          speed={800}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className} custom-bullet"><div class="dot-inner"></div></div>`
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="main-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="slide"
                style={{
                  backgroundImage: `url(${slide.image})`
                }}
              >
                <div className="slide-gradient"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     
      </div>

      {/* Custom Slider Dots */}
      <div className="swiper-pagination-custom slider-dots"></div>

      {/* Text Content */}
      <div className="slider-text">
        <h2 className="slider-title">{slides[activeIndex]?.title}</h2>
        <p className="slider-description">{slides[activeIndex]?.description}</p>
      </div>
    </div>
  )
}

export default SliderComp
