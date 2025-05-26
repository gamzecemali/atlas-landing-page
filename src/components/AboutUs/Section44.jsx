import React from 'react'
import './Section44.css'
import industryBg1 from '../../assets/images/industry-kv-bg.png'
import industryBg2 from '../../assets/images/industry-kv-bg2.png'
import industryBg3 from '../../assets/images/industry-kv-bg3.png'


const Section44 = () => {
  const testimonials = [
    {
      id: 1,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus."
    },
    {
      id: 2,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus."
    },
    {
      id: 3,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus."
    },
    {
      id: 4,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, tortor ut facilisis dictum, libero nulla tincidunt orci, at cursus justo felis non metus."
    }
  ];

  return (
    <div className="section44-container">
      {/* Background Image */}
      <div className="background-image">
      <div className='w-full h-full relative'>
          <div className="absolute top-0 left-0 w-full h-full image-variant-14">
            <img 
              src={industryBg1} 
              className='w-full h-full object-cover' 
              alt="Frame 1171276244" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-24">
            <img 
              src={industryBg2} 
              className='w-full h-full object-cover' 
              alt="Frame 1171276245" 
            />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full image-variant-34">
            <img 
              src={industryBg3} 
              className='w-full h-full object-cover' 
              alt="Variant3" 
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="section44-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title">LOREM IPSUM LOREM IPSUM LOREM IPSUM</h1>
          <p className="subtitle">
            Geospatial digital twins provide unparalleled context and high-resolution data integration for better business decisions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-section">
          <div className="testimonials-row">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="frame1">
                  <div className="frame6">
                    <div className="world-icon">
                      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5003 6L26.0553 7.83333C25.4783 8.26607 24.7766 8.5 24.0553 8.5H18.4587C17.9163 8.50021 17.3873 8.66809 16.944 8.98065C16.5008 9.2932 16.165 9.73514 15.9827 10.2459C15.8004 10.7567 15.7805 11.3114 15.9257 11.834C16.0708 12.3565 16.374 12.8214 16.7937 13.165L20.127 15.8917C21.418 16.9479 22.4243 18.3104 23.0543 19.8549C23.6842 21.3995 23.9178 23.0771 23.7337 24.735L23.657 25.43C23.553 26.3631 23.3508 27.2827 23.0537 28.1733L22.667 29.3333M0.166992 13.5L5.56366 12.6C6.08714 12.5126 6.62392 12.5515 7.12934 12.7134C7.63477 12.8753 8.09423 13.1555 8.46951 13.5308C8.84478 13.9061 9.12503 14.3656 9.28693 14.871C9.44883 15.3764 9.48771 15.9132 9.40033 16.4367L9.17533 17.7817C8.98082 18.9549 9.16715 20.1595 9.70701 21.2192C10.2469 22.2788 11.1119 23.1377 12.1753 23.67C13.0247 24.094 13.7038 24.7954 14.1002 25.6579C14.4967 26.5205 14.5867 27.4926 14.3553 28.4133L13.5003 31.8333" stroke="#A3A3A3" strokeWidth="2"/>
                        <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="#A3A3A3" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="frame6-2">
                      <h3 className="testimonial-title">{testimonial.title}</h3>
                    </div>
                  </div>
                  <p className="testimonial-content">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-row">
            {testimonials.slice(2, 4).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="frame1">
                  <div className="frame6">
                    <div className="world-icon">
                      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5003 6L26.0553 7.83333C25.4783 8.26607 24.7766 8.5 24.0553 8.5H18.4587C17.9163 8.50021 17.3873 8.66809 16.944 8.98065C16.5008 9.2932 16.165 9.73514 15.9827 10.2459C15.8004 10.7567 15.7805 11.3114 15.9257 11.834C16.0708 12.3565 16.374 12.8214 16.7937 13.165L20.127 15.8917C21.418 16.9479 22.4243 18.3104 23.0543 19.8549C23.6842 21.3995 23.9178 23.0771 23.7337 24.735L23.657 25.43C23.553 26.3631 23.3508 27.2827 23.0537 28.1733L22.667 29.3333M0.166992 13.5L5.56366 12.6C6.08714 12.5126 6.62392 12.5515 7.12934 12.7134C7.63477 12.8753 8.09423 13.1555 8.46951 13.5308C8.84478 13.9061 9.12503 14.3656 9.28693 14.871C9.44883 15.3764 9.48771 15.9132 9.40033 16.4367L9.17533 17.7817C8.98082 18.9549 9.16715 20.1595 9.70701 21.2192C10.2469 22.2788 11.1119 23.1377 12.1753 23.67C13.0247 24.094 13.7038 24.7954 14.1002 25.6579C14.4967 26.5205 14.5867 27.4926 14.3553 28.4133L13.5003 31.8333" stroke="#A3A3A3" strokeWidth="2"/>
                        <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="#A3A3A3" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="frame6-2">
                      <h3 className="testimonial-title">{testimonial.title}</h3>
                    </div>
                  </div>
                  <p className="testimonial-content">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section44
