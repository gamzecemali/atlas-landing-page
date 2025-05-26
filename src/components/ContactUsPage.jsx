import React, { useState } from 'react'
import './ContactUsPage.css'
import ArrowIcon from '../assets/arrow-right.svg'

const ContactUsPage = () => {
  const [communityForm, setCommunityForm] = useState({
    fullName: '',
    email: '',
    subscribeNews: false,
    agreeTerms: false
  })

  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleCommunitySubmit = (e) => {
    e.preventDefault()
    console.log('Community form submitted:', communityForm)
    // Handle form submission logic here
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
    // Handle form submission logic here
  }

  const handleCommunityChange = (field, value) => {
    setCommunityForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleContactChange = (field, value) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="contact-us-page relative z-50">
      <div className="contact-container">
        <h1 className="main-title">Let's Get in Touch And Make Magic Together</h1>
        
        <div className="forms-wrapper">
          <div className="forms-container">
            {/* Join Community Form */}
            <div className="form-section">
              <div className="form-heading">
                <h2>JOIN OUR COMMUNITY</h2>
              </div>
              
              <form className="form" onSubmit={handleCommunitySubmit}>
                <div className="form-fields">
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={communityForm.fullName}
                      onChange={(e) => handleCommunityChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="input-field">
                    <input
                      type="email"
                      placeholder="Email"
                      value={communityForm.email}
                      onChange={(e) => handleCommunityChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="checkbox-field">
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="subscribeNews"
                        checked={communityForm.subscribeNews}
                        onChange={(e) => handleCommunityChange('subscribeNews', e.target.checked)}
                      />
                      <label htmlFor="subscribeNews">Subscribe to the latest news</label>
                    </div>
                  </div>
                  
                  <div className="checkbox-field">
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={communityForm.agreeTerms}
                        onChange={(e) => handleCommunityChange('agreeTerms', e.target.checked)}
                        required
                      />
                      <label htmlFor="agreeTerms">I agree to the terms & conditions</label>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="submit-button">
                  <span>Join</span>
                  <img src={ArrowIcon} alt="Arrow" className="arrow-icon" />
                </button>
              </form>
            </div>

            {/* Get in Touch Form */}
            <div className="form-section">
              <div className="form-heading">
                <h2>GET IN TOUCH</h2>
              </div>
              
              <form className="form" onSubmit={handleContactSubmit}>
                <div className="form-fields">
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={contactForm.fullName}
                      onChange={(e) => handleContactChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="input-field">
                    <input
                      type="email"
                      placeholder="Email"
                      value={contactForm.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="input-field message-field">
                    <textarea
                      placeholder="Message"
                      value={contactForm.message}
                      onChange={(e) => handleContactChange('message', e.target.value)}
                      required
                      rows={4}
                    />
                  </div>
                </div>
                
                <button type="submit" className="submit-button">
                  <span>Send Message</span>
                  <img src={ArrowIcon} alt="Arrow" className="arrow-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
